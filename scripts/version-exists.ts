#!/usr/bin/env -S node --experimental-strip-types
/**
 * Checks whether a version tag already exists on the remote repository.
 *
 * Usage: node --experimental-strip-types scripts/version-exists.ts <version>
 *
 * Prints `skip=true` or `skip=false` on stdout. Exits non-zero only on
 * failure (missing argument, git error).
 */

import { spawnSync } from "node:child_process";

const version = process.argv[2];
if (!version) {
  console.error(
    "Usage: node --experimental-strip-types scripts/version-exists.ts <version>",
  );
  process.exit(1);
}

const r = spawnSync(
  "git",
  ["ls-remote", "--tags", "origin", `refs/tags/${version}`],
  { encoding: "utf8" },
);
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
