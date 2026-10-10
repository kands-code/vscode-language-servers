import { defineConfig } from "rolldown";

/**
 * Bundles each extracted language server into a single CJS file under dist/.
 *
 * `typescript` stays external: the html server reads its lib.*.d.ts files from
 * disk at runtime, so the real package must be installed (it is a production
 * dependency in package.json).
 */
const server = (name: string) => ({
  input: `servers/${name}/node/${name}ServerMain.ts`,
  external: ["typescript"],
  platform: "node" as const,
  output: {
    file: `dist/${name}.cjs`,
    format: "cjs" as const,
    // npm links `bin` entries directly on POSIX, so the bundle must be
    // directly executable.
    banner: "#!/usr/bin/env node",
    // Inline the few lazy dynamic imports (e.g. javascriptLibs) so each
    // server stays a single file usable as a bin entry.
    codeSplitting: false,
  },
});

export default defineConfig(["css", "html", "json"].map(server));
