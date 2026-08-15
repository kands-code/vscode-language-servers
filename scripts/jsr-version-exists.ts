#!/usr/bin/env -S deno run --allow-net
/**
 * Checks whether a version already exists on JSR.
 *
 * Usage: deno run --allow-net scripts/jsr-version-exists.ts <version>
 *
 * Prints `skip=true` or `skip=false` on stdout. Exits non-zero only on
 * failure (network error, bad response, missing argument).
 */

const version = Deno.args[0];
if (!version) {
  console.error(
    "Usage: deno run --allow-net scripts/jsr-version-exists.ts <version>",
  );
  Deno.exit(1);
}

const META_URL = "https://jsr.io/@qarks/vscode-language-servers/meta.json";

try {
  const res = await fetch(META_URL, {
    headers: { accept: "application/json" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const meta: { versions?: Record<string, unknown> } = await res.json();
  const exists = Object.hasOwn(meta.versions ?? {}, version);
  console.log(`skip=${exists}`);
  if (exists) {
    console.error(`Version ${version} is already on JSR; skipping.`);
  } else {
    console.error(`Version ${version} is not on JSR; publishing.`);
  }
  Deno.exit(0);
} catch (err) {
  console.error(`Failed to check JSR versions: ${(err as Error).message}`);
  Deno.exit(1);
}
