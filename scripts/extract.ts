#!/usr/bin/env -S node --experimental-strip-types
/**
 * Builds the runnable sources in `servers/` from the VS Code sources.
 *
 * Usage: node --experimental-strip-types scripts/extract.ts <vscode-tag>
 *
 * Unlike the old Deno pipeline this does no import rewriting: the upstream
 * sources use `.js` ESM specifiers which both Rolldown and tsc
 * (moduleResolution: bundler) resolve to their `.ts` counterparts. Each
 * server gets its own package.json with exact dependency versions from the
 * VS Code package-lock, so per-server version pins are preserved.
 */

import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
// Lowest VS Code tag this project verifies and maintains.
const MIN_SUPPORTED_TAG = "1.138.0";
// Pinned to the last JavaScript-based TypeScript. npm's `typescript@7` is the
// Go-based native compiler and is not a drop-in for the JS `ts.*`
// LanguageService API that html/modes/javascriptMode.ts relies on for
// embedded <script> completion. It is a runtime dependency of the published
// package (see package.json), not bundled.
const TS_VERSION = "6.0.3";

const SERVERS = [
  { name: "css", serverDir: "extensions/css-language-features/server" },
  { name: "html", serverDir: "extensions/html-language-features/server" },
  { name: "json", serverDir: "extensions/json-language-features/server" },
];

// Names that exist only as types in their packages. Re-exporting such a name
// as a value makes the bundler fail at link time ("Missing export"), so
// re-exports are split into `export type` during extraction. Extend this list
// when a new VS Code version introduces another type-only re-export (the
// build fails with a clear "Missing export" error naming it).
const TYPE_ONLY = new Set([
  "Definition",
  "DefinitionLink",
  "Connection",
  "SignatureHelp",
  "DocumentDiagnosticReport",
  "DocumentUri",
]);

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

/** Move type-only names in re-export statements into `export type`. */
function splitTypeOnlyReexports(content: string): string {
  return content.replace(
    /\bexport\s*\{([^}]*)\}\s*from\s*(['"])([^'"]+)\2(;?)/g,
    (_m, namesStr: string, q: string, spec: string, semi: string) => {
      const { typeOnly, value } = splitTypeValue(namesStr);
      if (typeOnly.length === 0) return _m;
      const parts: string[] = [];
      if (value.length > 0) {
        parts.push(`export { ${value.join(", ")} } from ${q}${spec}${q}`);
      }
      parts.push(`export type { ${typeOnly.join(", ")} } from ${q}${spec}${q}`);
      return parts.join(";\n") + semi;
    },
  );
}

function compareVersions(a: string, b: string): number {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < 3; i++) {
    if (pa[i] !== pb[i]) return pa[i] - pb[i];
  }
  return 0;
}

function copyServerSrc(srcDir: string, destDir: string) {
  mkdirSync(destDir, { recursive: true });
  for (const entry of readdirSync(srcDir, { withFileTypes: true })) {
    const s = join(srcDir, entry.name);
    const d = join(destDir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "test" || entry.name === "browser") continue;
      copyServerSrc(s, d);
    } else if (entry.isFile()) {
      if (entry.name.endsWith(".test.ts")) continue;
      copyFileSync(s, d);
    }
  }
}

function walkTs(dir: string, fn: (file: string) => void) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walkTs(p, fn);
    else if (entry.isFile() && entry.name.endsWith(".ts")) fn(p);
  }
}

/**
 * Exact versions of every package in the server's package-lock. Used as
 * exact (no-range) dependencies so installs are deterministic.
 */
function buildDependencies(serverRoot: string): Record<string, string> {
  const lock = JSON.parse(
    readFileSync(join(serverRoot, "package-lock.json"), "utf8"),
  );
  const packages = (lock.packages ?? {}) as Record<
    string,
    { version?: string }
  >;
  const deps: Record<string, string> = {};
  for (const [key, meta] of Object.entries(packages)) {
    if (!key.startsWith("node_modules/")) {
      continue;
    }
    const name = key.slice("node_modules/".length);
    if (!name.includes("node_modules") && !meta.dev && meta.version) {
      deps[name] = meta.version;
    }
  }
  // typescript comes from the root package.json (pinned to TS_VERSION).
  delete deps["typescript"];
  return deps;
}

/** Node-friendly rewrite of the html server's javascriptLibs.ts. */
function javascriptLibsSource(): string {
  return `import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const contents: { [name: string]: string } = {};

const nodeRequire = createRequire(import.meta.url);

// Best-effort: embedded <script> JS/TS completion degrades gracefully if
// this fails. require.resolve yields .../typescript/lib/typescript.js, so
// dirname is the directory holding lib.*.d.ts.
const TS_LIB_SOURCE = (() => {
  try {
    return dirname(nodeRequire.resolve("typescript"));
  } catch {
    return "";
  }
})();

// The bundle ships at dist/<name>.cjs; jquery.d.ts is copied to lib/ at the
// package root.
const JQUERY_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "lib",
  "jquery.d.ts",
);

export function loadLibrary(name: string) {
  let content = contents[name];
  if (typeof content !== "string") {
    let libPath;
    if (name === "jquery") {
      libPath = JQUERY_PATH;
    } else {
      libPath = join(TS_LIB_SOURCE, name);
    }
    try {
      content = readFileSync(libPath).toString();
    } catch {
      console.log(\`Unable to load library \${name} at \${libPath}\`);
      content = "";
    }
    contents[name] = content;
  }
  return content;
}
`;
}

function npmInstall(dir: string) {
  console.log(`Installing dependencies in ${dir} ...`);
  const r = spawnSync(
    "npm",
    ["install", "--prefix", dir, "--no-audit", "--no-fund"],
    { stdio: "inherit" },
  );
  if (r.status !== 0) {
    throw new Error(`npm install failed in ${dir} (exit ${r.status})`);
  }
}

async function prepareServer(
  server: { name: string; serverDir: string },
  vscodeDir: string,
  serversDir: string,
) {
  const { name, serverDir } = server;
  console.log(`==> Extracting ${name}`);
  const serverRoot = join(vscodeDir, serverDir);
  const dest = join(serversDir, name);

  rmSync(dest, { recursive: true, force: true });
  copyServerSrc(join(serverRoot, "src"), dest);

  // html: ship jquery.d.ts and swap in the Node javascriptLibs.ts (the
  // upstream one hard-codes VS Code's node_modules layout).
  if (name === "html") {
    const libSrc = join(serverRoot, "lib");
    const libDest = join(dest, "lib");
    mkdirSync(libDest, { recursive: true });
    for (const entry of readdirSync(libSrc, { withFileTypes: true })) {
      if (entry.isFile()) {
        copyFileSync(join(libSrc, entry.name), join(libDest, entry.name));
      }
    }
    writeFileSync(
      join(dest, "modes", "javascriptLibs.ts"),
      javascriptLibsSource(),
    );
  }

  // Re-export statements must not re-export type-only names as values.
  walkTs(dest, (file) => {
    const src = readFileSync(file, "utf8");
    const out = splitTypeOnlyReexports(src);
    if (out !== src) writeFileSync(file, out);
  });

  // Exact deps from the server's own lockfile; npm installs them into
  // servers/<name>/node_modules so each server keeps its own version pins.
  const pkg = {
    name: `vscode-language-servers-${name}-src`,
    version: "0.0.0",
    private: true,
    dependencies: buildDependencies(serverRoot),
  };
  writeFileSync(
    join(dest, "package.json"),
    JSON.stringify(pkg, null, 2) + "\n",
  );
  npmInstall(dest);
}

const VSCODE_REPO_URL = "https://github.com/microsoft/vscode.git";

function gitDescribe(vscodeDir: string): string | null {
  const r = spawnSync(
    "git",
    ["-C", vscodeDir, "describe", "--tags", "--exact-match"],
    { encoding: "utf8" },
  );
  if (r.status !== 0) return null;
  return r.stdout.trim();
}

function cloneVscode(version: string, vscodeDir: string) {
  const args = [
    "clone",
    "--depth",
    "1",
    "--branch",
    version,
    "--filter=blob:none",
    "--sparse",
    VSCODE_REPO_URL,
    vscodeDir,
  ];
  let lastStatus: number | null = null;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    console.log(
      `Cloning microsoft/vscode @ ${version} (attempt ${attempt}/3, shallow + sparse) ...`,
    );
    const r = spawnSync("git", args, { stdio: "inherit" });
    if (r.status === 0) return;
    lastStatus = r.status;
    rmSync(vscodeDir, { recursive: true, force: true });
    console.warn(`  clone failed (exit ${r.status}); retrying ...`);
  }
  throw new Error(
    `git clone failed after 3 attempts (last exit ${lastStatus})`,
  );
}

/**
 * Ensure a shallow sparse clone of microsoft/vscode is checked out at
 * `version`. An existing clone at another tag is reused by fetching just
 * that tag instead of re-cloning the repository from scratch.
 */
function ensureVscodeClone(version: string, vscodeDir: string) {
  const existing = existsSync(join(vscodeDir, ".git"));

  if (existing) {
    const current = gitDescribe(vscodeDir);
    if (current === version) {
      console.log(`Reusing existing microsoft/vscode clone @ ${version}`);
      return;
    }

    console.log(
      `Existing microsoft/vscode clone is @ ${
        current ?? "unknown"
      }; fetching ${version} ...`,
    );
    const fetch = spawnSync(
      "git",
      ["-C", vscodeDir, "fetch", "--depth", "1", "origin", "tag", version],
      { stdio: "inherit" },
    );
    if (fetch.status === 0) {
      const checkout = spawnSync(
        "git",
        ["-C", vscodeDir, "checkout", "--detach", "--force", version],
        { stdio: "inherit" },
      );
      if (checkout.status === 0) {
        console.log(`Switched existing clone to ${version}`);
        return;
      }
      console.warn(
        `  checkout failed (exit ${checkout.status}); re-cloning ...`,
      );
    } else {
      console.warn(`  fetch failed (exit ${fetch.status}); re-cloning ...`);
    }

    rmSync(vscodeDir, { recursive: true, force: true });
  }

  cloneVscode(version, vscodeDir);
}

async function main() {
  const tag = process.argv[2];
  if (!tag || !/^\d+\.\d+\.\d+$/.test(tag)) {
    console.error(
      "Usage: node --experimental-strip-types scripts/extract.ts <vscode-tag>",
    );
    process.exit(1);
  }
  if (compareVersions(tag, MIN_SUPPORTED_TAG) < 0) {
    console.error(
      `VS Code ${tag} is below the minimum supported version ${MIN_SUPPORTED_TAG}: refusing to build.`,
    );
    process.exit(1);
  }

  const vscodeDir = join(ROOT, "work", "vscode");
  const serversDir = join(ROOT, "servers");

  ensureVscodeClone(tag, vscodeDir);

  // Sparse checkout always includes the repo root (LICENSE.txt), so only
  // the server folders need listing here.
  const sparse = spawnSync(
    "git",
    [
      "-C",
      vscodeDir,
      "sparse-checkout",
      "set",
      ...SERVERS.map((s) => s.serverDir),
    ],
    { stdio: "inherit" },
  );
  if (sparse.status !== 0) {
    throw new Error(`git sparse-checkout failed (exit ${sparse.status})`);
  }

  rmSync(serversDir, { recursive: true, force: true });
  mkdirSync(serversDir, { recursive: true });

  for (const server of SERVERS) {
    await prepareServer(server, vscodeDir, serversDir);
  }

  // Ship VS Code's MIT license notice with the extracted code.
  try {
    copyFileSync(
      join(vscodeDir, "LICENSE.txt"),
      join(ROOT, "LICENSE.vscode.txt"),
    );
  } catch {
    console.warn("  [warn] VS Code LICENSE.txt not found; skipping license copy");
  }

  // Record the source tag so build/smoke output says which VS Code release
  // the bundles were extracted from.
  writeFileSync(join(serversDir, ".vscode-tag"), tag + "\n");

  console.log("\n=== Sources ready ===");
  console.log(`  ${serversDir}`);
  console.log(`Next: npm run check && npm run build && npm run smoke`);
}

await main();
