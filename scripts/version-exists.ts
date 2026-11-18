#!/usr/bin/env node
/**
 * Prints skip=true when the version tag already exists on origin.
 *
 * Usage: node scripts/version-exists.ts <version>
 */

import { spawnSync } from "node:child_process";

const version = process.argv[2];
if (!version) {
  console.error("Usage: node scripts/version-exists.ts <version>");
  process.exit(1);
}

const r = spawnSync("git", ["ls-remote", "--tags", "origin", `refs/tags/${version}`], {
  encoding: "utf8",
});
if (r.status !== 0) {
  console.error(`git ls-remote failed: ${r.stderr.trim()}`);
  process.exit(1);
}
const exists = r.stdout.trim().length > 0;
console.log(`skip=${exists}`);
if (exists) {
  console.error(`Tag ${version} already exists; skipping.`);
} else {
  console.error(`Tag ${version} does not exist; publishing.`);
}
