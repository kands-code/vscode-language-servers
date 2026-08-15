#!/usr/bin/env -S deno run --allow-all
/**
 * Builds the JSR package in `jsr/` from the VS Code sources.
 *
 * Usage: deno run --allow-all scripts/prepare-jsr.ts <vscode-tag> [jsr-version]
 */

import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const JSR_NAME = "@qarks/vscode-language-servers";
const TS_VERSION = "5.9.3";

const SERVERS = [
  {
    name: "css",
    serverDir: "extensions/css-language-features/server",
    entry: "./css/node/cssServerMain.ts",
  },
  {
    name: "html",
    serverDir: "extensions/html-language-features/server",
    entry: "./html/node/htmlServerMain.ts",
  },
  {
    name: "json",
    serverDir: "extensions/json-language-features/server",
    entry: "./json/node/jsonServerMain.ts",
  },
];

const LABELS: Record<string, string> = {
  css: "CSS / LESS / SCSS",
  html: "HTML",
  json: "JSON / JSONC",
};

const NODE_BUILTINS = new Set([
  "fs",
  "path",
  "os",
  "url",
  "util",
  "crypto",
  "buffer",
  "child_process",
  "stream",
  "events",
  "http",
  "https",
  "net",
  "tls",
  "zlib",
  "assert",
  "string_decoder",
  "querystring",
  "module",
  "timers",
  "perf_hooks",
  "readline",
  "readline/promises",
  "dns",
  "dgram",
  "constants",
  "tty",
  "v8",
  "worker_threads",
]);

// Names that exist only as types. Re-exporting a type as a value fails at
// runtime, so these are split out into `export type`.
const TYPE_ONLY = new Set([
  "Definition",
  "DefinitionLink",
  "Connection",
  "SignatureHelp",
  "DocumentDiagnosticReport",
  "DocumentUri",
]);

function splitPackage(spec: string): { pkg: string; sub: string } {
  const parts = spec.split("/");
  if (spec.startsWith("@")) {
    return { pkg: parts.slice(0, 2).join("/"), sub: parts.slice(2).join("/") };
  }
  return { pkg: parts[0], sub: parts.slice(1).join("/") };
}

function rewriteSpecifier(spec: string, versions: Map<string, string>): string {
  if (
    spec.startsWith(".") || spec.startsWith("/") || spec.startsWith("file:")
  ) {
    return spec.endsWith(".js") ? spec.slice(0, -3) + ".ts" : spec;
  }
  if (/^(npm:|jsr:|node:|data:|https?:)/.test(spec)) return spec;

  const { pkg, sub } = splitPackage(spec);
  if (versions.has(pkg)) {
    return `npm:${pkg}@${versions.get(pkg)}${sub ? "/" + sub : ""}`;
  }
  if (NODE_BUILTINS.has(spec)) return `node:${spec}`;
  console.warn(`  [warn] unresolved specifier: ${spec}`);
  return spec;
}

function rewriteFile(content: string, versions: Map<string, string>): string {
  let s = content;
  // Strip webpack chunk comments first; their quoted names break the
  // dynamic-import rewrite below.
  s = s.replace(/\/\*\s*webpackChunkName:\s*"[^"]*"\s*\*\//g, "");
  // Static imports and re-exports.
  s = s.replace(
    /(\bfrom\s+)(['"])([^'"]+)\2/g,
    (_m, pre, q, spec) => pre + q + rewriteSpecifier(spec, versions) + q,
  );
  // Dynamic imports.
  s = s.replace(
    /(\bimport\s*\()\s*(['"])([^'"]+)\2(\s*\))/g,
    (_m, pre, q, spec, post) =>
      pre + q + rewriteSpecifier(spec, versions) + q + post,
  );
  // Re-exports: move type-only names into `export type`.
  s = s.replace(
    /(\bexport\s*\{)([^}]*)(\}\s*from\s*)(['"])([^'"]+)\4(;?)/g,
    (_m, pre, namesStr, mid, q, spec, semi) => {
      const { typeOnly, value } = splitTypeValue(namesStr);
      if (typeOnly.length === 0) return _m;
      const s2 = rewriteSpecifier(spec, versions);
      const parts: string[] = [];
      if (value.length > 0) {
        parts.push(
          `export { ${value.join(", ")} } from ${q}${s2}${q}`,
        );
      }
      parts.push(`export type { ${typeOnly.join(", ")} } from ${q}${s2}${q}`);
      return parts.join(";\n") + semi;
    },
  );
  return s;
}

function splitTypeValue(
  namesStr: string,
): { typeOnly: string[]; value: string[] } {
  const typeOnly: string[] = [];
  const value: string[] = [];
  for (const raw of namesStr.split(",")) {
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
      if (entry.name === "test" || entry.name === "browser") continue;
      await copyServerSrc(s, d);
    } else if (entry.isFile) {
      if (entry.name.endsWith(".test.ts")) continue;
      await Deno.copyFile(s, d);
    }
  }
}

async function walkTs(dir: string, fn: (file: string) => Promise<void>) {
  for await (const entry of Deno.readDir(dir)) {
    const p = join(dir, entry.name);
    if (entry.isDirectory) await walkTs(p, fn);
    else if (entry.isFile && entry.name.endsWith(".ts")) await fn(p);
  }
}

function buildVersions(
  serverRoot: string,
  needsTypescript: boolean,
): Map<string, string> {
  const lock = JSON.parse(
    Deno.readTextFileSync(join(serverRoot, "package-lock.json")),
  );
  const packages = (lock.packages ?? {}) as Record<
    string,
    { version?: string }
  >;
  const versions = new Map<string, string>();
  for (const [key, meta] of Object.entries(packages)) {
    if (key.startsWith("node_modules/") && meta.version) {
      versions.set(key.slice("node_modules/".length), meta.version);
    }
  }
  if (needsTypescript) versions.set("typescript", TS_VERSION);
  return versions;
}

/** Deno-friendly rewrite of the html server's javascriptLibs.ts. */
function denoJavascriptLibs(tsVersion: string): string {
  return `import { join, dirname } from 'node:path';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const contents: { [name: string]: string } = {};

const TS_LIB_SOURCE = (() => {
  // Best-effort: embedded <script> JS/TS completion degrades gracefully if
  // this fails.
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

/** JSR module doc for a server entrypoint. */
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

// Default the connection to stdio (no --stdio flag needed) and prepend the
// module doc.
function patchEntrypoint(dest: string, name: string) {
  const file = join(dest, "node", `${name}ServerMain.ts`);
  let src = Deno.readTextFileSync(file);
  src = src.replace(
    "createConnection()",
    "createConnection(process.stdin, process.stdout)",
  );
  if (!src.includes("@module")) {
    src = moduleDoc(name) + "\n" + src;
  }
  Deno.writeTextFileSync(file, src);
}

/** README.md shipped in the JSR package, from the template file. */
function generateReadme(version: string): string {
  return Deno.readTextFileSync(join(ROOT, "scripts", "jsr-readme.template.md"))
    .replaceAll("{{version}}", version);
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
  await copyServerSrc(join(serverRoot, "src"), dest);

  const needsTypescript = name === "html";
  const versions = buildVersions(serverRoot, needsTypescript);

  // html: ship jquery.d.ts and swap in the Deno javascriptLibs.ts.
  if (name === "html") {
    const libSrc = join(serverRoot, "lib");
    const libDest = join(dest, "lib");
    await Deno.mkdir(libDest, { recursive: true });
    for await (const entry of Deno.readDir(libSrc)) {
      if (entry.isFile) {
        await Deno.copyFile(
          join(libSrc, entry.name),
          join(libDest, entry.name),
        );
      }
    }
    Deno.writeTextFileSync(
      join(dest, "modes", "javascriptLibs.ts"),
      denoJavascriptLibs(versions.get("typescript") ?? TS_VERSION),
    );
  }

  await walkTs(dest, async (file) => {
    const src = Deno.readTextFileSync(file);
    const out = rewriteFile(src, versions);
    if (out !== src) Deno.writeTextFileSync(file, out);
  });

  patchEntrypoint(dest, name);
}

/** Clone microsoft/vscode at the release tag, reusing an existing clone. */
function ensureVscodeClone(version: string, vscodeDir: string) {
  try {
    Deno.statSync(join(vscodeDir, ".git"));
    const r = new Deno.Command("git", {
      args: ["-C", vscodeDir, "describe", "--tags", "--exact-match"],
      stdout: "piped",
      stderr: "piped",
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
    "clone",
    "--depth",
    "1",
    "--branch",
    version,
    "--filter=blob:none",
    "--sparse",
    "https://github.com/microsoft/vscode.git",
    vscodeDir,
  ];
  let lastStatus: number | null = null;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    console.log(
      `Cloning microsoft/vscode @ ${version} (attempt ${attempt}/3, shallow + sparse)…`,
    );
    const r = new Deno.Command("git", {
      args,
      stdout: "inherit",
      stderr: "inherit",
    }).outputSync();
    if (r.success) return;
    lastStatus = r.code;
    Deno.removeSync(vscodeDir, { recursive: true });
    console.warn(`  clone failed (exit ${r.code}); retrying…`);
  }
  throw new Error(
    `git clone failed after 3 attempts (last exit ${lastStatus})`,
  );
}

async function main() {
  // cloneTag: VS Code git tag (e.g. 1.133.0). publishVersion: JSR version,
  // may add a suffix for hotfixes (e.g. 1.133.0-hotfix.1); defaults to the tag.
  const cloneTag = Deno.args[0];
  const publishVersion = Deno.args[1] ?? cloneTag;
  if (!cloneTag || !/^\d+\.\d+\.\d+$/.test(cloneTag)) {
    console.error(
      "Usage: deno run --allow-all scripts/prepare-jsr.ts <vscode-tag> [publish-version]",
    );
    Deno.exit(1);
  }
  if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(publishVersion)) {
    console.error(`Invalid publish version: ${publishVersion}`);
    Deno.exit(1);
  }

  const vscodeDir = join(ROOT, "work", "vscode");
  const jsrDir = join(ROOT, "jsr");

  ensureVscodeClone(cloneTag, vscodeDir);

  // Sparse checkout always includes the repo root (LICENSE.txt), so only the
  // server folders need listing here.
  const sparse = new Deno.Command("git", {
    args: [
      "-C",
      vscodeDir,
      "sparse-checkout",
      "set",
      ...SERVERS.map((s) => s.serverDir),
    ],
    stdout: "inherit",
    stderr: "inherit",
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
    await Deno.copyFile(
      join(vscodeDir, "LICENSE.txt"),
      join(jsrDir, "LICENSE.txt"),
    );
  } catch {
    console.warn(
      "  [warn] VS Code LICENSE.txt not found; skipping license copy",
    );
  }

  // README for the JSR package page.
  Deno.writeTextFileSync(
    join(jsrDir, "README.md"),
    generateReadme(publishVersion),
  );

  const denoJson = {
    name: JSR_NAME,
    version: publishVersion,
    license: "MIT",
    exports: Object.fromEntries(SERVERS.map((s) => [`./${s.name}`, s.entry])),
    compilerOptions: {
      // Settings from VS Code's own tsconfig.base.json.
      useUnknownInCatchVariables: false,
      exactOptionalPropertyTypes: false,
    },
    publish: {
      // jsr/ is gitignored, so list the published files explicitly.
      include: [
        "css/",
        "html/",
        "json/",
        "deno.json",
        "README.md",
        "LICENSE.txt",
      ],
    },
  };
  Deno.writeTextFileSync(
    join(jsrDir, "deno.json"),
    JSON.stringify(denoJson, null, 2) + "\n",
  );

  console.log("\n=== JSR package ready ===");
  console.log(`  ${jsrDir}`);
}

await main();
