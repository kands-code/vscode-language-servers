#!/usr/bin/env -S deno run --allow-all
/**
 * Prepare the JSR package `@qarks/vscode-language-servers` from the extracted
 * VS Code language-server sources.
 *
 * Usage:
 *   deno run --allow-all scripts/prepare-jsr.ts <vscode-version>
 *
 * What it does:
 *   0. Shallow-sparse-clones microsoft/vscode at the given release tag.
 *   1. Reads each server's src/ from the cloned work/vscode tree.
 *   2. Copies the node/server sources into `jsr/<css|html|json>/`, dropping
 *      `browser/`, `test/` and `*.test.ts` files.
 *   3. Rewrites import specifiers for Deno/JSR:
 *        - bare npm packages  -> `npm:<pkg>@<version>[/subpath]` (versions read
 *          from the server's own package-lock.json, so they track VS Code)
 *        - bare Node builtins -> `node:<name>`
 *        - relative `./x.js`  -> `./x.ts`
 *   4. Patches the html server's javascriptLibs.ts for Deno.
 *   5. Writes `jsr/deno.json` with the package name/version/exports.
 */

import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const JSR_NAME = '@qarks/vscode-language-servers';
const TS_VERSION = '5.9.3';

const SERVERS = [
  { name: 'css', serverDir: 'extensions/css-language-features/server', entry: './css/node/cssServerMain.ts' },
  { name: 'html', serverDir: 'extensions/html-language-features/server', entry: './html/node/htmlServerMain.ts' },
  { name: 'json', serverDir: 'extensions/json-language-features/server', entry: './json/node/jsonServerMain.ts' },
];

const LABELS: Record<string, string> = {
  css: 'CSS / LESS / SCSS',
  html: 'HTML',
  json: 'JSON / JSONC',
};

const NODE_BUILTINS = new Set([
  'fs', 'path', 'os', 'url', 'util', 'crypto', 'buffer', 'child_process',
  'stream', 'events', 'http', 'https', 'net', 'tls', 'zlib', 'assert',
  'string_decoder', 'querystring', 'module', 'timers', 'perf_hooks', 'readline',
  'readline/promises', 'dns', 'dgram', 'constants', 'tty', 'v8', 'worker_threads',
]);

// LSP names that exist only as TypeScript types (no runtime value). Deno
// elides such names from `import` statements automatically, but a re-export
// (`export { X } from '…'`) treats them as values and fails at runtime, so we
// rewrite them to `export type { X }`.
const TYPE_ONLY = new Set([
  'Definition',
  'DefinitionLink',
  'Connection',
  'SignatureHelp',
  'DocumentDiagnosticReport',
  'DocumentUri',
]);

function splitPackage(spec: string): { pkg: string; sub: string } {
  const parts = spec.split('/');
  if (spec.startsWith('@')) {
    return { pkg: parts.slice(0, 2).join('/'), sub: parts.slice(2).join('/') };
  }
  return { pkg: parts[0], sub: parts.slice(1).join('/') };
}

function rewriteSpecifier(spec: string, versions: Map<string, string>): string {
  if (spec.startsWith('.') || spec.startsWith('/') || spec.startsWith('file:')) {
    return spec.endsWith('.js') ? spec.slice(0, -3) + '.ts' : spec;
  }
  if (/^(npm:|jsr:|node:|data:|https?:)/.test(spec)) return spec;

  const { pkg, sub } = splitPackage(spec);
  if (versions.has(pkg)) {
    return `npm:${pkg}@${versions.get(pkg)}${sub ? '/' + sub : ''}`;
  }
  if (NODE_BUILTINS.has(spec)) return `node:${spec}`;
  console.warn(`  [warn] unresolved specifier: ${spec}`);
  return spec;
}

function rewriteFile(content: string, versions: Map<string, string>): string {
  let s = content;
  // Strip webpack chunk-name comments (they contain quotes and would confuse
  // the dynamic-import regex below).
  s = s.replace(/\/\*\s*webpackChunkName:\s*"[^"]*"\s*\*\//g, '');
  // Static imports and re-exports: `from 'x'` / `from "x"`.
  s = s.replace(/(\bfrom\s+)(['"])([^'"]+)\2/g, (_m, pre, q, spec) => pre + q + rewriteSpecifier(spec, versions) + q);
  // Dynamic imports: `import('x')` / `import("x")`.
  s = s.replace(/(\bimport\s*\()\s*(['"])([^'"]+)\2(\s*\))/g, (_m, pre, q, spec, post) => pre + q + rewriteSpecifier(spec, versions) + q + post);
  // Re-exports of type-only names: `export { A, B } from 'x'` → split into
  // `export type { … }` + `export { … }`.
  s = s.replace(/(\bexport\s*\{)([^}]*)(\}\s*from\s*)(['"])([^'"]+)\4(;?)/g, (_m, pre, namesStr, mid, q, spec, semi) => {
    const { typeOnly, value } = splitTypeValue(namesStr);
    if (typeOnly.length === 0) return _m;
    const s2 = rewriteSpecifier(spec, versions);
    const parts: string[] = [];
    if (value.length > 0) parts.push(`export { ${value.join(', ')} } from ${q}${s2}${q}`);
    parts.push(`export type { ${typeOnly.join(', ')} } from ${q}${s2}${q}`);
    return parts.join(';\n') + semi;
  });
  return s;
}

function splitTypeValue(namesStr: string): { typeOnly: string[]; value: string[] } {
  const typeOnly: string[] = [];
  const value: string[] = [];
  for (const raw of namesStr.split(',')) {
    const entry = raw.trim();
    if (!entry) continue;
    const m = entry.match(/^(\S+)(?:\s+as\s+(\S+))?$/);
    const name = m?.[1] ?? entry;
    (TYPE_ONLY.has(name) ? typeOnly : value).push(entry);
  }
  return { typeOnly, value };
}

async function copyServerSrc(srcDir: string, destDir: string) {
  await Deno.mkdir(destDir, { recursive: true });
  for await (const entry of Deno.readDir(srcDir)) {
    const s = join(srcDir, entry.name);
    const d = join(destDir, entry.name);
    if (entry.isDirectory) {
      if (entry.name === 'test' || entry.name === 'browser') continue;
      await copyServerSrc(s, d);
    } else if (entry.isFile) {
      if (entry.name.endsWith('.test.ts')) continue;
      await Deno.copyFile(s, d);
    }
  }
}

async function walkTs(dir: string, fn: (file: string) => Promise<void>) {
  for await (const entry of Deno.readDir(dir)) {
    const p = join(dir, entry.name);
    if (entry.isDirectory) await walkTs(p, fn);
    else if (entry.isFile && entry.name.endsWith('.ts')) await fn(p);
  }
}

function buildVersions(serverRoot: string, needsTypescript: boolean): Map<string, string> {
  const lock = JSON.parse(Deno.readTextFileSync(join(serverRoot, 'package-lock.json')));
  const packages = (lock.packages ?? {}) as Record<string, { version?: string }>;
  const versions = new Map<string, string>();
  for (const [key, meta] of Object.entries(packages)) {
    if (key.startsWith('node_modules/') && meta.version) {
      versions.set(key.slice('node_modules/'.length), meta.version);
    }
  }
  if (needsTypescript) versions.set('typescript', TS_VERSION);
  return versions;
}

/** Deno-friendly rewrite of the html server's javascriptLibs.ts. */
function denoJavascriptLibs(tsVersion: string): string {
  return `import { join, dirname } from 'node:path';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const contents: { [name: string]: string } = {};

// Resolve the TypeScript lib directory via Deno's npm resolution. Best-effort:
// embedded <script> JS/TS completion degrades gracefully if this fails.
const TS_LIB_SOURCE = (() => {
  try {
    return dirname(fileURLToPath(import.meta.resolve('npm:typescript@${tsVersion}')));
  } catch {
    return '';
  }
})();

// jquery.d.ts ships alongside this module under html/lib/.
const JQUERY_PATH = join(dirname(fileURLToPath(import.meta.url)), '..', 'lib', 'jquery.d.ts');

export function loadLibrary(name: string) {
  let content = contents[name];
  if (typeof content !== 'string') {
    let libPath;
    if (name === 'jquery') {
      libPath = JQUERY_PATH;
    } else {
      libPath = join(TS_LIB_SOURCE, name);
    }
    try {
      content = readFileSync(libPath).toString();
    } catch {
      console.log(\`Unable to load library \${name} at \${libPath}\`);
      content = '';
    }
    contents[name] = content;
  }
  return content;
}
`;
}

/** Module doc for a server entrypoint (satisfies JSR's module-doc score). */
function moduleDoc(name: string): string {
  const bin = `vscode-${name}-language-server`;
  return `/**
 * ${LABELS[name]} language server extracted from VS Code.
 *
 * Starts a Language Server Protocol (LSP) server over stdio using
 * \`vscode-${name}-languageservice\`. No \`--stdio\` flag is required.
 *
 * @example
 * \`\`\`sh
 * deno install --global -A -n ${bin} jsr:${JSR_NAME}/${name}
 * \`\`\`
 *
 * @module
 */
`;
}

/**
 * Patch a server entrypoint: default the connection to stdio (so clients do
 * not need to pass `--stdio`) and prepend a module doc.
 */
function patchEntrypoint(dest: string, name: string) {
  const file = join(dest, 'node', `${name}ServerMain.ts`);
  let src = Deno.readTextFileSync(file);
  src = src.replace('createConnection()', 'createConnection(process.stdin, process.stdout)');
  if (!src.includes('@module')) {
    src = moduleDoc(name) + '\n' + src;
  }
  Deno.writeTextFileSync(file, src);
}

/** README.md shipped in the JSR package (satisfies JSR's readme/example score). */
function generateReadme(version: string): string {
  return `# @qarks/vscode-language-servers

CSS, HTML, and JSON language servers extracted from
[microsoft/vscode](https://github.com/microsoft/vscode), published to JSR for
Deno. Version \`${version}\` tracks VS Code \`${version}\`.

## Install

\`\`\`sh
deno install --global -A -n vscode-css-language-server jsr:@qarks/vscode-language-servers/css
deno install --global -A -n vscode-html-language-server jsr:@qarks/vscode-language-servers/html
deno install --global -A -n vscode-json-language-server jsr:@qarks/vscode-language-servers/json
\`\`\`

## Usage

Each installed binary is a stdio Language Server. Point your LSP client at it —
no \`--stdio\` flag is required.

### Helix

\`\`\`toml
[language-server.css-ls]
command = "vscode-css-language-server"

[[language]]
name = "css"
language-servers = ["css-ls"]
\`\`\`

### Neovim (lspconfig)

\`\`\`lua
require('lspconfig').cssls.setup {
  cmd = { '/path/to/vscode-css-language-server' },
}
\`\`\`

## License

MIT. Extracted server code is © Microsoft Corporation.
`;
}

async function prepareServer(
  server: { name: string; serverDir: string },
  vscodeDir: string,
  jsrDir: string,
) {
  const { name, serverDir } = server;
  console.log(`==> Preparing JSR package for ${name}`);
  const serverRoot = join(vscodeDir, serverDir);
  const dest = join(jsrDir, name);

  await Deno.remove(dest, { recursive: true }).catch(() => {});
  await copyServerSrc(join(serverRoot, 'src'), dest);

  const needsTypescript = name === 'html';
  const versions = buildVersions(serverRoot, needsTypescript);

  // html: ship jquery.d.ts and swap in the Deno javascriptLibs.ts.
  if (name === 'html') {
    const libSrc = join(serverRoot, 'lib');
    const libDest = join(dest, 'lib');
    await Deno.mkdir(libDest, { recursive: true });
    for await (const entry of Deno.readDir(libSrc)) {
      if (entry.isFile) await Deno.copyFile(join(libSrc, entry.name), join(libDest, entry.name));
    }
    Deno.writeTextFileSync(join(dest, 'modes', 'javascriptLibs.ts'), denoJavascriptLibs(versions.get('typescript') ?? TS_VERSION));
  }

  await walkTs(dest, async (file) => {
    const src = Deno.readTextFileSync(file);
    const out = rewriteFile(src, versions);
    if (out !== src) Deno.writeTextFileSync(file, out);
  });

  patchEntrypoint(dest, name);
}

/**
 * Ensure `vscodeDir` contains microsoft/vscode at the requested release tag,
 * reusing an existing clone when possible and retrying transient clone
 * failures a few times.
 */
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
  // <cloneTag> is the microsoft/vscode git tag to extract from (plain semver,
  // e.g. `1.133.0`). <publishVersion> is the JSR package version (may carry a
  // pre-release suffix for hotfixes, e.g. `1.133.0-hotfix.1`). When omitted it
  // defaults to the clone tag.
  const cloneTag = Deno.args[0];
  const publishVersion = Deno.args[1] ?? cloneTag;
  if (!cloneTag || !/^\d+\.\d+\.\d+$/.test(cloneTag)) {
    console.error('Usage: deno run --allow-all scripts/prepare-jsr.ts <vscode-tag> [publish-version]');
    Deno.exit(1);
  }
  if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(publishVersion)) {
    console.error(`Invalid publish version: ${publishVersion}`);
    Deno.exit(1);
  }

  const vscodeDir = join(ROOT, 'work', 'vscode');
  const jsrDir = join(ROOT, 'jsr');

  ensureVscodeClone(cloneTag, vscodeDir);

  // Cone-mode sparse checkout always includes the repo-root files (e.g.
  // LICENSE.txt), so only the server directories need to be listed here.
  const sparse = new Deno.Command('git', {
    args: ['-C', vscodeDir, 'sparse-checkout', 'set', ...SERVERS.map((s) => s.serverDir)],
    stdout: 'inherit',
    stderr: 'inherit',
  }).outputSync();
  if (!sparse.success) {
    throw new Error(`git sparse-checkout failed (exit ${sparse.code})`);
  }

  await Deno.remove(jsrDir, { recursive: true }).catch(() => {});
  await Deno.mkdir(jsrDir, { recursive: true });

  for (const server of SERVERS) {
    await prepareServer(server, vscodeDir, jsrDir);
  }

  // Ship VS Code's MIT license notice with the extracted code.
  try {
    await Deno.copyFile(join(vscodeDir, 'LICENSE.txt'), join(jsrDir, 'LICENSE.txt'));
  } catch {
    console.warn('  [warn] VS Code LICENSE.txt not found; skipping license copy');
  }

  // README for the JSR package page.
  Deno.writeTextFileSync(join(jsrDir, 'README.md'), generateReadme(publishVersion));

  const denoJson = {
    name: JSR_NAME,
    version: publishVersion,
    license: 'MIT',
    exports: Object.fromEntries(SERVERS.map((s) => [`./${s.name}`, s.entry])),
    compilerOptions: {
      // Matches VS Code's own tsconfig.base.json; the extracted sources rely
      // on catch variables being typed as `any` (not `unknown`).
      useUnknownInCatchVariables: false,
      exactOptionalPropertyTypes: false,
    },
    publish: {
      // `jsr/` is gitignored (generated), so explicitly list the files to
      // publish. This overrides the gitignore exclusion.
      include: [
        'css/',
        'html/',
        'json/',
        'deno.json',
        'README.md',
        'LICENSE.txt',
      ],
    },
  };
  Deno.writeTextFileSync(join(jsrDir, 'deno.json'), JSON.stringify(denoJson, null, 2) + '\n');

  console.log('\n=== JSR package ready ===');
  console.log(`  ${jsrDir}`);
}

await main();
