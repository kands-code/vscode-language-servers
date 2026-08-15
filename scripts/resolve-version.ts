#!/usr/bin/env -S deno run --allow-net
/**
 * Resolve the VS Code version to extract.
 *
 * Usage:
 *   deno run --allow-net scripts/resolve-version.ts [explicit-version]
 *
 * If an explicit semver is passed, it is echoed back. Otherwise the latest
 * stable version is fetched from the VS Code update API.
 */

const explicit = Deno.args[0];

if (explicit && /^\d+\.\d+\.\d+$/.test(explicit)) {
  console.log(explicit);
  Deno.exit(0);
}

try {
  const res = await fetch('https://update.code.visualstudio.com/api/releases/stable');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const releases = (await res.json()) as string[];
  const latest = releases[0];
  if (!latest) throw new Error('empty release list');
  console.log(latest);
} catch (err) {
  console.error(`Failed to resolve VS Code version: ${(err as Error).message}`);
  Deno.exit(1);
}
