#!/usr/bin/env -S node --experimental-strip-types
/**
 * Prints the VS Code version to extract: the one passed in, or the latest
 * stable from the VS Code update API.
 *
 * Usage: node --experimental-strip-types scripts/resolve-version.ts [version]
 */

const explicit = process.argv[2];

if (explicit) {
  if (!/^\d+\.\d+\.\d+$/.test(explicit)) {
    console.error(`Invalid VS Code git tag (expected x.y.z): ${explicit}`);
    process.exit(1);
  }
  console.log(explicit);
  process.exit(0);
}

try {
  const res = await fetch(
    "https://update.code.visualstudio.com/api/releases/stable",
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const releases = (await res.json()) as string[];
  const latest = releases[0];
  if (!latest) throw new Error("empty release list");
  console.log(latest);
} catch (err) {
  console.error(
    `Failed to resolve VS Code version: ${(err as Error).message}`,
  );
  process.exit(1);
}
