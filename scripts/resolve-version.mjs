#!/usr/bin/env node
/**
 * Resolve the VS Code version to extract.
 *
 * Usage:
 *   node scripts/resolve-version.mjs [explicit-version]
 *
 * If an explicit semver is passed, it is echoed back. Otherwise the latest
 * stable version is fetched from the VS Code update API.
 */

const explicit = process.argv[2];

if (explicit && /^\d+\.\d+\.\d+$/.test(explicit)) {
  console.log(explicit);
  process.exit(0);
}

try {
  const res = await fetch('https://update.code.visualstudio.com/api/releases/stable');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const releases = await res.json();
  const latest = releases[0];
  if (!latest) throw new Error('empty release list');
  console.log(latest);
} catch (err) {
  console.error(`Failed to resolve VS Code version: ${err.message}`);
  process.exit(1);
}
