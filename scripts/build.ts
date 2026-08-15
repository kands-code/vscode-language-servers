#!/usr/bin/env -S deno run --allow-all
/**
 * Build standalone (Node) language servers extracted from microsoft/vscode.
 *
 * Usage:
 *   deno run --allow-all scripts/build.ts <vscode-version>
 *
 * This is the Deno-orchestrated equivalent of the old Node script. It still
 * shells out to `git`, `npm`, `tsc` and `tar` because the resulting tarballs
 * are consumed by Node users (self-contained ESM + node_modules).
 */

import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const TS_VERSION = '5.9.3';
const NODE_TYPES_VERSION = '24.12.4';

interface ServerSpec {
  name: string;
  serverDir: string;
  entry: string;
  bin: string;
  needsTypescriptAtRuntime: boolean;
  needsLibDir: boolean;
}

const SERVERS: ServerSpec[] = [
  {
    name: 'css',
    serverDir: 'extensions/css-language-features/server',
    entry: 'out/node/cssServerMain.js',
    bin: 'vscode-css-language-server',
    needsTypescriptAtRuntime: false,
    needsLibDir: false,
  },
  {
    name: 'html',
    serverDir: 'extensions/html-language-features/server',
    entry: 'out/node/htmlServerMain.js',
    bin: 'vscode-html-language-server',
    needsTypescriptAtRuntime: true,
    needsLibDir: true,
  },
  {
    name: 'json',
    serverDir: 'extensions/json-language-features/server',
    entry: 'out/node/jsonServerMain.js',
    bin: 'vscode-json-language-server',
    needsTypescriptAtRuntime: false,
    needsLibDir: false,
  },
];

const TRANSITIVE_PINS = [
  'vscode-jsonrpc',
  'vscode-languageserver-protocol',
  'vscode-languageserver-textdocument',
  'vscode-languageserver-types',
];

function run(cmd: string, args: string[], opts: { cwd?: string; env?: Record<string, string> } = {}) {
  const command = new Deno.Command(cmd, {
    args,
    cwd: opts.cwd,
    env: opts.env,
    stdout: 'inherit',
    stderr: 'inherit',
    stdin: 'inherit',
  });
  const status = command.outputSync();
  if (!status.success) {
    throw new Error(`Command failed (exit ${status.code}): ${cmd} ${args.join(' ')}`);
  }
}

async function copyDir(src: string, dest: string) {
  await Deno.mkdir(dest, { recursive: true });
  for await (const entry of Deno.readDir(src)) {
    const s = join(src, entry.name);
    const d = join(dest, entry.name);
    if (entry.isDirectory) await copyDir(s, d);
    else if (entry.isFile) await Deno.copyFile(s, d);
    else if (entry.isSymlink) await Deno.symlink(await Deno.readLink(s), d);
  }
}

function readJson(file: string): Record<string, any> {
  return JSON.parse(Deno.readTextFileSync(file));
}

/**
 * The extracted html server hard-codes the TypeScript lib path as
 * `<serverFolder>/../../node_modules/typescript/lib`, which only resolves
 * inside the VS Code monorepo. Patch it to resolve the real `typescript`
 * package via Node module resolution so the tarball is relocatable.
 */
function patchHtmlJavascriptLibs(srcDir: string) {
  const file = join(srcDir, 'modes', 'javascriptLibs.ts');
  try {
    Deno.statSync(file);
  } catch {
    console.warn('  [warn] javascriptLibs.ts not found; skipping html patch');
    return;
  }
  let src = Deno.readTextFileSync(file);

  const importNeedle = "import { readFileSync } from 'fs';";
  if (!src.includes("from 'node:module'")) {
    src = src.replace(importNeedle, `${importNeedle}\nimport { createRequire } from 'node:module';`);
  }

  const needle = "const TYPESCRIPT_LIB_SOURCE = join(serverFolder, '../../node_modules/typescript/lib');";
  const replacement = "const TYPESCRIPT_LIB_SOURCE = dirname(createRequire(import.meta.url).resolve('typescript'));";
  if (src.includes(needle)) {
    src = src.replace(needle, replacement);
    Deno.writeTextFileSync(file, src);
    console.log('  [patch] html javascriptLibs.ts → resolved TypeScript lib dir');
  } else {
    console.warn('  [warn] could not find TYPESCRIPT_LIB_SOURCE line; html patch skipped');
  }
}

async function buildServer(
  server: ServerSpec,
  vscodeDir: string,
  buildRoot: string,
  distDir: string,
  version: string,
  npmCache: string,
) {
  const { name, serverDir, entry, bin, needsTypescriptAtRuntime, needsLibDir } = server;
  console.log(`\n==> Building ${name} language server`);

  const serverRoot = join(vscodeDir, serverDir);
  const outDir = join(buildRoot, name);
  await Deno.remove(outDir, { recursive: true }).catch(() => {});
  await Deno.mkdir(outDir, { recursive: true });

  await copyDir(join(serverRoot, 'src'), join(outDir, 'src'));
  if (needsLibDir) {
    await copyDir(join(serverRoot, 'lib'), join(outDir, 'lib'));
    patchHtmlJavascriptLibs(join(outDir, 'src'));
  }

  const pkg = readJson(join(serverRoot, 'package.json'));
  const lock = readJson(join(serverRoot, 'package-lock.json'));
  const lockPkgs = (lock.packages ?? {}) as Record<string, { version?: string }>;
  const resolved = (p: string) => lockPkgs[`node_modules/${p}`]?.version ?? null;

  const dependencies: Record<string, string> = {};
  for (const [dep, range] of Object.entries(pkg.dependencies ?? {})) {
    dependencies[dep] = resolved(dep) ?? String(range).replace(/^[\^~]/, '');
  }
  if (needsTypescriptAtRuntime) dependencies.typescript = TS_VERSION;

  const overrides: Record<string, string> = {};
  if (pkg.overrides) {
    for (const [k, v] of Object.entries(pkg.overrides)) {
      if (typeof v === 'string') overrides[k] = v;
      else if (v && typeof v === 'object') {
        for (const [k2, v2] of Object.entries(v as Record<string, unknown>)) overrides[k2] = String(v2);
      }
    }
  }
  for (const t of TRANSITIVE_PINS) {
    const v = resolved(t);
    if (v && !(t in dependencies)) overrides[t] = v;
  }

  const devDependencies: Record<string, string> = { '@types/node': NODE_TYPES_VERSION };
  if (!needsTypescriptAtRuntime) devDependencies.typescript = TS_VERSION;

  const genPkg: Record<string, unknown> = {
    name: `vscode-${name}-languageserver-extracted`,
    version,
    private: true,
    type: 'module',
    description: `${name.toUpperCase()} language server extracted from VS Code ${version}`,
    license: 'MIT',
    engines: { node: '>=22' },
    dependencies,
    devDependencies,
    ...(Object.keys(overrides).length ? { overrides } : {}),
    scripts: { compile: 'tsc -p tsconfig.json' },
  };
  Deno.writeTextFileSync(join(outDir, 'package.json'), JSON.stringify(genPkg, null, 2) + '\n');

  Deno.writeTextFileSync(
    join(outDir, 'tsconfig.json'),
    JSON.stringify(
      {
        compilerOptions: {
          module: 'nodenext',
          moduleResolution: 'nodenext',
          target: 'es2022',
          lib: ['es2022', 'WebWorker'],
          outDir: './out',
          rootDir: './src',
          esModuleInterop: true,
          skipLibCheck: true,
          forceConsistentCasingInFileNames: true,
          types: ['node'],
        },
        include: ['src/**/*'],
      },
      null,
      2,
    ) + '\n',
  );

  await Deno.mkdir(join(outDir, 'bin'), { recursive: true });
  const launcher = `#!/usr/bin/env sh
set -e
DIR="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
exec node "$DIR/${entry}" --stdio "$@"
`;
  const launcherPath = join(outDir, 'bin', bin);
  Deno.writeTextFileSync(launcherPath, launcher);
  await Deno.chmod(launcherPath, 0o755);

  const vscodeLicense = join(vscodeDir, 'LICENSE.txt');
  try {
    await Deno.copyFile(vscodeLicense, join(outDir, 'LICENSE.txt'));
  } catch {
    /* optional */
  }

  const npmEnv: Record<string, string> = { ...Deno.env.toObject(), npm_config_cache: npmCache };
  run('npm', ['install', '--no-audit', '--no-fund'], { cwd: outDir, env: npmEnv });
  run('npm', ['run', 'compile'], { cwd: outDir, env: npmEnv });
  run('npm', ['prune', '--omit=dev'], { cwd: outDir, env: npmEnv });

  for (const extra of ['src', 'tsconfig.json', 'package-lock.json']) {
    await Deno.remove(join(outDir, extra), { recursive: true }).catch(() => {});
  }

  const tarball = join(distDir, `${bin}-${version}.tar.gz`);
  run('tar', ['-czf', tarball, '-C', outDir, '.'], {});
  console.log(`  -> ${tarball}`);
  return tarball;
}

function ensureVscodeClone(version: string, vscodeDir: string) {
  try {
    Deno.statSync(join(vscodeDir, '.git'));
    const r = new Deno.Command('git', {
      args: ['-C', vscodeDir, 'describe', '--tags', '--exact-match'],
      stdout: 'piped',
      stderr: 'piped',
    }).outputSync();
    if (r.success && new TextDecoder().decode(r.stdout).trim() === version) {
      console.log(`Reusing existing microsoft/vscode clone @ ${version}`);
      return;
    }
    Deno.removeSync(vscodeDir, { recursive: true });
  } catch {
    /* not cloned yet */
  }

  const args = [
    'clone', '--depth', '1', '--branch', version,
    '--filter=blob:none', '--sparse',
    'https://github.com/microsoft/vscode.git', vscodeDir,
  ];
  let lastStatus: number | null = null;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    console.log(`Cloning microsoft/vscode @ ${version} (attempt ${attempt}/3, shallow + sparse)…`);
    const r = new Deno.Command('git', { args, stdout: 'inherit', stderr: 'inherit' }).outputSync();
    if (r.success) return;
    lastStatus = r.code;
    Deno.removeSync(vscodeDir, { recursive: true });
    console.warn(`  clone failed (exit ${r.code}); retrying…`);
  }
  throw new Error(`git clone failed after 3 attempts (last exit ${lastStatus})`);
}

async function main() {
  const version = Deno.args[0];
  if (!version || !/^\d+\.\d+\.\d+$/.test(version)) {
    console.error('Usage: deno run --allow-all scripts/build.ts <vscode-version>  (e.g. 1.133.0)');
    Deno.exit(1);
  }

  const workDir = join(ROOT, 'work');
  const vscodeDir = join(workDir, 'vscode');
  const buildRoot = join(workDir, 'build');
  const distDir = join(ROOT, 'dist');
  const npmCache = join(workDir, '.npm-cache');

  await Deno.remove(buildRoot, { recursive: true }).catch(() => {});
  await Deno.mkdir(distDir, { recursive: true });

  ensureVscodeClone(version, vscodeDir);

  run('git', ['-C', vscodeDir, 'sparse-checkout', 'set', ...SERVERS.map((s) => s.serverDir)]);

  const artifacts: string[] = [];
  for (const server of SERVERS) {
    artifacts.push(await buildServer(server, vscodeDir, buildRoot, distDir, version, npmCache));
  }

  console.log('\n=== Artifacts ===');
  for (const a of artifacts) console.log(`  ${a}`);
}

await main();
