#!/usr/bin/env node
/**
 * Extracts the CSS, HTML, and JSON servers from a VS Code tag into `servers/`.
 *
 * Usage: node scripts/extract.ts <vscode-tag>
 *
 * Upstream `.js` import specifiers resolve to `.ts` under Rolldown and tsc, so
 * imports are not rewritten. Each server's package.json pins the versions from
 * VS Code's extensions pnpm lock.
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
import { parse as parseYaml } from "yaml";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
// The extensions pnpm lock this script reads first appeared in VS Code 1.146.0.
const MIN_SUPPORTED_TAG = "1.146.0";
// The html server needs TypeScript's JS compiler API and lib.*.d.ts files;
// the native 7.x package has neither.
const TYPESCRIPT_MAJOR = 6;

const SERVERS = [
  { name: "css", serverDir: "extensions/css-language-features/server" },
  { name: "html", serverDir: "extensions/html-language-features/server" },
  { name: "json", serverDir: "extensions/json-language-features/server" },
];

// Type-only names; re-exporting them as values fails at bundle link time, so
// they are split into `export type` during extraction. Add new ones when the
// build reports a missing export.
const TYPE_ONLY = new Set([
  "Definition",
  "DefinitionLink",
  "Connection",
  "SignatureHelp",
  "DocumentDiagnosticReport",
  "DocumentUri",
]);

function splitTypeValue(namesStr: string): {
  typeOnly: string[];
  value: string[];
} {
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

type LockDependency = { specifier?: string; version?: string };
type LockImporter = { dependencies?: Record<string, LockDependency> };
type LockSnapshot = {
  dependencies?: Record<string, string>;
  optionalDependencies?: Record<string, string>;
};
type PnpmLock = {
  importers?: Record<string, LockImporter>;
  snapshots?: Record<string, LockSnapshot>;
};

/** `1.2.3(peer@4.5.6)` -> `1.2.3`. */
function baseVersion(version: string): string {
  return version.split("(")[0];
}

function loadPnpmLock(vscodeDir: string): PnpmLock {
  const lockPath = join(vscodeDir, "extensions", "pnpm-lock.yaml");
  if (!existsSync(lockPath)) {
    throw new Error(`Missing ${lockPath} (VS Code 1.146.0+ ships it)`);
  }
  return parseYaml(readFileSync(lockPath, "utf8")) as PnpmLock;
}

function findSnapshot(lock: PnpmLock, name: string, version: string): LockSnapshot | undefined {
  const snapshots = lock.snapshots ?? {};
  const exact = `${name}@${version}`;
  const key = snapshots[exact]
    ? exact
    : Object.keys(snapshots).find((candidate) => candidate.startsWith(`${exact}(`));
  return key ? snapshots[key] : undefined;
}

/** Pins a server's runtime dependencies, including the transitive closure. */
function buildDependencies(lock: PnpmLock, serverDir: string): Record<string, string> {
  const importerName = serverDir.replace(/^extensions\//, "");
  const importer = lock.importers?.[importerName];
  if (!importer) {
    throw new Error(`No "${importerName}" importer in extensions/pnpm-lock.yaml`);
  }

  // Breadth-first, so the direct dependency's version wins over nested ones.
  const deps: Record<string, string> = {};
  const queue = Object.entries(importer.dependencies ?? {})
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, meta]) => [name, baseVersion(meta.version ?? "")] as [string, string]);

  for (let i = 0; i < queue.length; i++) {
    const [name, version] = queue[i];
    if (!version) {
      throw new Error(`No resolved version for ${name} in extensions/pnpm-lock.yaml`);
    }
    if (deps[name] !== undefined) continue;
    deps[name] = version;

    const snapshot = findSnapshot(lock, name, version);
    if (!snapshot) {
      throw new Error(`No ${name}@${version} snapshot in extensions/pnpm-lock.yaml`);
    }
    for (const section of [snapshot.dependencies, snapshot.optionalDependencies]) {
      for (const [depName, depVersion] of Object.entries(section ?? {}).sort()) {
        queue.push([depName, baseVersion(depVersion)]);
      }
    }
  }

  // TypeScript is pinned once in the root package.json; see syncTypeScript().
  delete deps["typescript"];
  return deps;
}

function installedTypescriptVersion(): string | null {
  try {
    const pkg = JSON.parse(
      readFileSync(join(ROOT, "node_modules", "typescript", "package.json"), "utf8"),
    ) as { version?: string };
    return pkg.version ?? null;
  } catch {
    return null;
  }
}

/** Uses the same TypeScript version as VS Code's built-in extensions. */
function syncTypeScript(lock: PnpmLock) {
  const entry = lock.importers?.["."]?.dependencies?.typescript;
  if (!entry?.version) {
    throw new Error("extensions/pnpm-lock.yaml does not pin typescript");
  }

  const specifier = entry.specifier ?? "";
  if (!/^[\s0-9.xX*^~<>=|-]+$/.test(specifier)) {
    throw new Error(`Cannot follow typescript specifier "${specifier}"; expected a registry range`);
  }

  const version = baseVersion(entry.version);
  const major = Number(version.split(".")[0]);
  if (!/^\d+\.\d+\.\d+/.test(version) || major !== TYPESCRIPT_MAJOR) {
    throw new Error(
      `typescript ${version} is not the JavaScript ${TYPESCRIPT_MAJOR}.x compiler the html server needs`,
    );
  }

  const rootPackage = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8")) as {
    dependencies?: Record<string, string>;
  };
  const declared = rootPackage.dependencies?.typescript;
  if (declared !== version || installedTypescriptVersion() !== version) {
    console.log(`==> typescript ${declared ?? "(missing)"} -> ${version}`);
    const r = spawnSync(
      "npm",
      ["install", "--save-exact", "--no-audit", "--no-fund", `typescript@${version}`],
      { cwd: ROOT, stdio: "inherit" },
    );
    if (r.status !== 0) {
      throw new Error(`npm install typescript@${version} failed`);
    }
  }

  const libDir = join(ROOT, "node_modules", "typescript", "lib");
  if (
    !existsSync(join(libDir, "typescript.js")) ||
    !existsSync(join(libDir, "lib.es2020.full.d.ts"))
  ) {
    throw new Error(`typescript@${version} is missing its compiler or lib.*.d.ts files`);
  }
  console.log(`==> TypeScript ${version}`);
}

/** Node-friendly rewrite of the html server's javascriptLibs.ts. */
function javascriptLibsSource(): string {
  return `import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const contents: { [name: string]: string } = {};

const nodeRequire = createRequire(import.meta.url);

// Best-effort: embedded <script> completion degrades gracefully if this fails.
// require.resolve yields .../typescript/lib/typescript.js.
const TS_LIB_SOURCE = (() => {
  try {
    return dirname(nodeRequire.resolve("typescript"));
  } catch {
    return "";
  }
})();

// The bundle ships at dist/<name>.cjs; jquery.d.ts is copied to lib/.
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
  const r = spawnSync("npm", ["install", "--prefix", dir, "--no-audit", "--no-fund"], {
    stdio: "inherit",
  });
  if (r.status !== 0) {
    throw new Error(`npm install failed in ${dir} (exit ${r.status})`);
  }
}

async function prepareServer(
  server: { name: string; serverDir: string },
  vscodeDir: string,
  serversDir: string,
  lock: PnpmLock,
) {
  const { name, serverDir } = server;
  console.log(`==> Extracting ${name}`);
  const serverRoot = join(vscodeDir, serverDir);
  const dest = join(serversDir, name);

  rmSync(dest, { recursive: true, force: true });
  copyServerSrc(join(serverRoot, "src"), dest);

  // html: ship jquery.d.ts and replace the upstream javascriptLibs.ts, which
  // assumes VS Code's node_modules layout.
  if (name === "html") {
    const libSrc = join(serverRoot, "lib");
    const libDest = join(dest, "lib");
    mkdirSync(libDest, { recursive: true });
    for (const entry of readdirSync(libSrc, { withFileTypes: true })) {
      if (entry.isFile()) {
        copyFileSync(join(libSrc, entry.name), join(libDest, entry.name));
      }
    }
    writeFileSync(join(dest, "modes", "javascriptLibs.ts"), javascriptLibsSource());
  }

  walkTs(dest, (file) => {
    const src = readFileSync(file, "utf8");
    const out = splitTypeOnlyReexports(src);
    if (out !== src) writeFileSync(file, out);
  });

  const pkg = {
    name: `vscode-language-servers-${name}-src`,
    version: "0.0.0",
    private: true,
    dependencies: buildDependencies(lock, serverDir),
  };
  writeFileSync(join(dest, "package.json"), JSON.stringify(pkg, null, 2) + "\n");
  npmInstall(dest);
}

const VSCODE_REPO_URL = "https://github.com/microsoft/vscode.git";

function gitDescribe(vscodeDir: string): string | null {
  const r = spawnSync("git", ["-C", vscodeDir, "describe", "--tags", "--exact-match"], {
    encoding: "utf8",
  });
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
  throw new Error(`git clone failed after 3 attempts (last exit ${lastStatus})`);
}

/** Ensures the shallow sparse microsoft/vscode clone is checked out at `version`. */
function ensureVscodeClone(version: string, vscodeDir: string) {
  const existing = existsSync(join(vscodeDir, ".git"));

  if (existing) {
    const current = gitDescribe(vscodeDir);
    if (current === version) {
      console.log(`Reusing existing microsoft/vscode clone @ ${version}`);
      return;
    }

    console.log(
      `Existing microsoft/vscode clone is @ ${current ?? "unknown"}; fetching ${version} ...`,
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
      console.warn(`  checkout failed (exit ${checkout.status}); re-cloning ...`);
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
    console.error("Usage: node scripts/extract.ts <vscode-tag>");
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

  // Root files are included automatically; list only the server directories.
  const sparse = spawnSync(
    "git",
    ["-C", vscodeDir, "sparse-checkout", "set", ...SERVERS.map((s) => s.serverDir)],
    { stdio: "inherit" },
  );
  if (sparse.status !== 0) {
    throw new Error(`git sparse-checkout failed (exit ${sparse.status})`);
  }

  // Cone mode also checks out files beside those directories, including the
  // extensions pnpm lock.
  const lock = loadPnpmLock(vscodeDir);
  syncTypeScript(lock);

  rmSync(serversDir, { recursive: true, force: true });
  mkdirSync(serversDir, { recursive: true });

  for (const server of SERVERS) {
    await prepareServer(server, vscodeDir, serversDir, lock);
  }

  // Ship VS Code's license with the extracted code.
  try {
    copyFileSync(join(vscodeDir, "LICENSE.txt"), join(ROOT, "LICENSE.vscode.txt"));
  } catch {
    console.warn("  [warn] VS Code LICENSE.txt not found; skipping license copy");
  }

  // Source tag for build and smoke-test output.
  writeFileSync(join(serversDir, ".vscode-tag"), tag + "\n");

  console.log("\n=== Sources ready ===");
  console.log(`  ${serversDir}`);
  console.log(
    "Next: npm run format && npm run lint && npm run check && npm run build && npm run smoke",
  );
}

await main();
