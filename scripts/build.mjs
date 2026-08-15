#!/usr/bin/env node
/**
 * Build standalone language servers extracted from microsoft/vscode.
 *
 * Usage:
 *   node scripts/build.mjs <vscode-version>
 *
 * For each server (css, html, json) this script:
 *   1. Clones microsoft/vscode at the given release tag (shallow + sparse).
 *   2. Copies the server's `src/` (plus `lib/` for html).
 *   3. Generates a self-contained package.json (exact-pinned deps taken from
 *      the server's own package-lock.json) and a standalone tsconfig.json.
 *   4. Installs deps, compiles with tsc, prunes devDependencies.
 *   5. Emits a tarball into dist/ containing the compiled ESM output, a
 *      pruned node_modules, and a `bin/` launcher script.
 */

import { spawnSync } from 'node:child_process';
import {
  chmodSync,
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// Compile-time + (for html) runtime TypeScript. TS 5.9.x exposes the classic
// compiler API (`ts.createLanguageService` …) used by the html server's
// embedded <script> completion. VSCode itself aliases `typescript` to the
// newer native `@typescript/typescript6`, but that native API is not a drop-in
// for the classic LanguageService API used here, so we pin classic TS 5.9.x.
const TS_VERSION = '5.9.3';
const NODE_TYPES_VERSION = '24.12.4';

const SERVERS = [
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

// Runtime packages that are transitive deps of the language-service/server
// packages. We pin them (via npm `overrides`) to the exact versions resolved
// in the server's own package-lock.json so the produced node_modules matches
// what VS Code ships.
const TRANSITIVE_PINS = [
  'vscode-jsonrpc',
  'vscode-languageserver-protocol',
  'vscode-languageserver-textdocument',
  'vscode-languageserver-types',
];

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { stdio: 'inherit', ...opts });
  if (r.status !== 0) {
    throw new Error(`Command failed (exit ${r.status}): ${cmd} ${args.join(' ')}`);
  }
  return r;
}

function readJson(file) {
  return JSON.parse(readFileSync(file, 'utf8'));
}

/**
 * The extracted html server hard-codes the TypeScript lib path as
 * `<serverFolder>/../../node_modules/typescript/lib`, which only resolves
 * inside the VS Code monorepo. Patch it to resolve the real `typescript`
 * package via Node module resolution so the tarball is relocatable.
 */
function patchHtmlJavascriptLibs(srcDir) {
  const file = join(srcDir, 'modes', 'javascriptLibs.ts');
  if (!existsSync(file)) {
    console.warn('  [warn] javascriptLibs.ts not found; skipping html patch');
    return;
  }
  let src = readFileSync(file, 'utf8');

  const importNeedle = "import { readFileSync } from 'fs';";
  if (!src.includes("from 'node:module'")) {
    src = src.replace(importNeedle, `${importNeedle}\nimport { createRequire } from 'node:module';`);
  }

  const needle = "const TYPESCRIPT_LIB_SOURCE = join(serverFolder, '../../node_modules/typescript/lib');";
  const replacement = "const TYPESCRIPT_LIB_SOURCE = dirname(createRequire(import.meta.url).resolve('typescript'));";
  if (src.includes(needle)) {
    src = src.replace(needle, replacement);
    writeFileSync(file, src);
    console.log('  [patch] html javascriptLibs.ts → resolved TypeScript lib dir');
  } else {
    console.warn('  [warn] could not find TYPESCRIPT_LIB_SOURCE line; html patch skipped');
  }
}

function buildServer(server, vscodeDir, buildRoot, distDir, version, npmCache) {
  const { name, serverDir, entry, bin, needsTypescriptAtRuntime, needsLibDir } = server;
  console.log(`\n==> Building ${name} language server`);

  const serverRoot = join(vscodeDir, serverDir);
  const outDir = join(buildRoot, name);
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });

  cpSync(join(serverRoot, 'src'), join(outDir, 'src'), { recursive: true });
  if (needsLibDir) {
    cpSync(join(serverRoot, 'lib'), join(outDir, 'lib'), { recursive: true });
    patchHtmlJavascriptLibs(join(outDir, 'src'));
  }

  const pkg = readJson(join(serverRoot, 'package.json'));
  const lock = readJson(join(serverRoot, 'package-lock.json'));
  const lockPkgs = lock.packages || {};
  const resolved = (p) => lockPkgs[`node_modules/${p}`]?.version ?? null;

  // Direct runtime dependencies, pinned to the exact resolved versions.
  const dependencies = {};
  for (const [dep, range] of Object.entries(pkg.dependencies || {})) {
    dependencies[dep] = resolved(dep) ?? String(range).replace(/^[\^~]/, '');
  }
  if (needsTypescriptAtRuntime) {
    dependencies.typescript = TS_VERSION;
  }

  // npm overrides: flatten the server's own overrides + pin transitive deps.
  const overrides = {};
  if (pkg.overrides) {
    for (const [k, v] of Object.entries(pkg.overrides)) {
      if (typeof v === 'string') overrides[k] = v;
      else if (v && typeof v === 'object') {
        for (const [k2, v2] of Object.entries(v)) overrides[k2] = v2;
      }
    }
  }
  for (const t of TRANSITIVE_PINS) {
    const v = resolved(t);
    if (v && !(t in dependencies)) overrides[t] = v;
  }

  const devDependencies = { '@types/node': NODE_TYPES_VERSION };
  if (!needsTypescriptAtRuntime) {
    devDependencies.typescript = TS_VERSION;
  }

  const genPkg = {
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
  writeFileSync(join(outDir, 'package.json'), JSON.stringify(genPkg, null, 2) + '\n');

  writeFileSync(
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
          // We only need tsc to *emit* JS here (VS Code type-checks its own
          // code in its CI). Some release-tag sources and some `-next`
          // language-service packages do not type-check cleanly under `strict`
          // (e.g. `let x = null; x = '…'`), so we compile without strict type
          // checking. This does not affect the emitted JavaScript.
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

  // Launcher script: node <entry> --stdio
  mkdirSync(join(outDir, 'bin'), { recursive: true });
  const launcher = `#!/usr/bin/env sh
set -e
DIR="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
exec node "$DIR/${entry}" --stdio "$@"
`;
  const launcherPath = join(outDir, 'bin', bin);
  writeFileSync(launcherPath, launcher);
  chmodSync(launcherPath, 0o755);

  // Include VS Code's license with the extracted code.
  const vscodeLicense = join(vscodeDir, 'LICENSE.txt');
  if (existsSync(vscodeLicense)) {
    cpSync(vscodeLicense, join(outDir, 'LICENSE.txt'));
  }

  const npmEnv = { ...process.env, npm_config_cache: npmCache };
  run('npm', ['install', '--no-audit', '--no-fund'], { cwd: outDir, env: npmEnv });
  run('npm', ['run', 'compile'], { cwd: outDir, env: npmEnv });
  run('npm', ['prune', '--omit=dev'], { cwd: outDir, env: npmEnv });

  // Strip build-only files so the tarball carries just what's needed at
  // runtime: bin/, out/, node_modules/, package.json (for `type: module`),
  // LICENSE.txt, and lib/ for html.
  for (const extra of ['src', 'tsconfig.json', 'package-lock.json']) {
    rmSync(join(outDir, extra), { recursive: true, force: true });
  }

  const tarball = join(distDir, `${bin}-${version}.tar.gz`);
  run('tar', ['-czf', tarball, '-C', outDir, '.'], {});
  console.log(`  -> ${tarball}`);
  return tarball;
}

/**
 * Ensure `vscodeDir` contains microsoft/vscode at the requested release tag,
 * reusing an existing clone when possible and retrying transient clone
 * failures a few times.
 */
function ensureVscodeClone(version, vscodeDir) {
  if (existsSync(join(vscodeDir, '.git'))) {
    const r = spawnSync('git', ['-C', vscodeDir, 'describe', '--tags', '--exact-match'], {
      stdio: 'pipe',
    });
    if (r.status === 0 && r.stdout.toString().trim() === version) {
      console.log(`Reusing existing microsoft/vscode clone @ ${version}`);
      return;
    }
    rmSync(vscodeDir, { recursive: true, force: true });
  }

  const args = [
    'clone', '--depth', '1', '--branch', version,
    '--filter=blob:none', '--sparse',
    'https://github.com/microsoft/vscode.git', vscodeDir,
  ];
  let lastStatus;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    console.log(`Cloning microsoft/vscode @ ${version} (attempt ${attempt}/3, shallow + sparse)…`);
    const r = spawnSync('git', args, { stdio: 'inherit' });
    if (r.status === 0) return;
    lastStatus = r.status;
    rmSync(vscodeDir, { recursive: true, force: true });
    console.warn(`  clone failed (exit ${r.status}); retrying…`);
  }
  throw new Error(`git clone failed after 3 attempts (last exit ${lastStatus})`);
}

function main() {
  const version = process.argv[2];
  if (!version || !/^\d+\.\d+\.\d+$/.test(version)) {
    console.error('Usage: node scripts/build.mjs <vscode-version>  (e.g. 1.133.0)');
    process.exit(1);
  }

  const workDir = join(ROOT, 'work');
  const vscodeDir = join(workDir, 'vscode');
  const buildRoot = join(workDir, 'build');
  const distDir = join(ROOT, 'dist');
  const npmCache = join(workDir, '.npm-cache');

  rmSync(buildRoot, { recursive: true, force: true });
  mkdirSync(distDir, { recursive: true });

  ensureVscodeClone(version, vscodeDir);

  // Cone-mode sparse checkout always includes the repo-root files (e.g.
  // LICENSE.txt), so only the server directories need to be listed here.
  run('git', ['-C', vscodeDir, 'sparse-checkout', 'set',
    ...SERVERS.map((s) => s.serverDir)]);

  const artifacts = [];
  for (const server of SERVERS) {
    artifacts.push(buildServer(server, vscodeDir, buildRoot, distDir, version, npmCache));
  }

  console.log('\n=== Artifacts ===');
  for (const a of artifacts) console.log(`  ${a}`);
}

main();
