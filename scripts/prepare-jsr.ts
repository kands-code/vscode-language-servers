#!/usr/bin/env -S deno run --allow-all
/**
 * Prepare the JSR package `@qarks/vscode-language-servers` from the extracted
 * VS Code language-server sources.
 *
 * Usage:
 *   deno run --allow-all scripts/prepare-jsr.ts <vscode-version>
 *
 * What it does:
 *   1. Reads each server's src/ from the (already cloned) work/vscode tree.
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
}

async function main() {
  const version = Deno.args[0];
  if (!version || !/^\d+\.\d+\.\d+$/.test(version)) {
    console.error('Usage: deno run --allow-all scripts/prepare-jsr.ts <vscode-version>');
    Deno.exit(1);
  }

  const vscodeDir = join(ROOT, 'work', 'vscode');
  const jsrDir = join(ROOT, 'jsr');

  await Deno.remove(jsrDir, { recursive: true }).catch(() => {});
  await Deno.mkdir(jsrDir, { recursive: true });

  for (const server of SERVERS) {
    await prepareServer(server, vscodeDir, jsrDir);
  }

  const denoJson = {
    name: JSR_NAME,
    version,
    license: 'MIT',
    exports: Object.fromEntries(SERVERS.map((s) => [`./${s.name}`, s.entry])),
    compilerOptions: {
      // Matches VS Code's own tsconfig.base.json; the extracted sources rely
      // on catch variables being typed as `any` (not `unknown`).
      useUnknownInCatchVariables: false,
      exactOptionalPropertyTypes: false,
    },
  };
  Deno.writeTextFileSync(join(jsrDir, 'deno.json'), JSON.stringify(denoJson, null, 2) + '\n');

  console.log('\n=== JSR package ready ===');
  console.log(`  ${jsrDir}`);
}

await main();
