#!/usr/bin/env -S node --experimental-strip-types
/**
 * Copies runtime asset files next to the bundles in dist/.
 *
 * Usage: node --experimental-strip-types scripts/copy-assets.ts
 */

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

mkdirSync(join(ROOT, "lib"), { recursive: true });
copyFileSync(
  join(ROOT, "servers", "html", "lib", "jquery.d.ts"),
  join(ROOT, "lib", "jquery.d.ts"),
);
console.log("Copied lib/jquery.d.ts");
