# vscode-language-servers

Language servers extracted from [microsoft/vscode](https://github.com/microsoft/vscode), kept up to date automatically by GitHub Actions.

A modern successor to [`hrsh7th/vscode-langservers-extracted`](https://github.com/hrsh7th/vscode-langservers-extracted), which is no longer maintained while VS Code keeps moving. Ships via **JSR** (Deno-native) and **GitHub Releases** (Node tarballs).

## Included servers

| Command                        | Language            | Source (in microsoft/vscode)                        |
| ----------------------------- | ------------------- | --------------------------------------------------- |
| `vscode-css-language-server`  | CSS / LESS / SCSS   | `extensions/css-language-features/server`           |
| `vscode-html-language-server` | HTML                | `extensions/html-language-features/server`          |
| `vscode-json-language-server` | JSON / JSONC        | `extensions/json-language-features/server`          |

> Not included: **markdown** (now published separately as [`vscode-markdown-languageserver`](https://www.npmjs.com/package/vscode-markdown-languageserver)) and **eslint** (moved out of the VS Code repo long ago).

## Install

### Deno (JSR)

```sh
deno install -A -n vscode-css-language-server jsr:@qarks/vscode-language-servers/css
deno install -A -n vscode-html-language-server jsr:@qarks/vscode-language-servers/html
deno install -A -n vscode-json-language-server jsr:@qarks/vscode-language-servers/json
```

Each installs a `~/.deno/bin/vscode-*-language-server` wrapper. Point your LSP client at it and pass `--stdio`.

### Node (GitHub Release)

Download a tarball from [Releases](https://github.com/kands-code/vscode-language-servers/releases) and extract it — it is fully self-contained (compiled ESM + pruned `node_modules`, no `npm install` needed):

```sh
tar -xzf vscode-css-language-server-1.133.0.tar.gz
./bin/vscode-css-language-server --stdio
```

**Requirements:** Node.js **22+** (or Deno for the JSR packages).

### Neovim (lspconfig)

```lua
require('lspconfig').cssls.setup {
  cmd = { '/path/to/vscode-css-language-server', '--stdio' },
}
```

> The launcher already passes `--stdio`; passing it again explicitly is harmless.

### Helix

In `languages.toml`:

```toml
[language-server.css-ls]
command = "vscode-css-language-server"
args = ["--stdio"]

[[language]]
name = "css"
language-servers = ["css-ls"]
```

## How it works

A Deno-based GitHub Actions workflow ([`.github/workflows/release.yml`](.github/workflows/release.yml)):

1. Runs on a schedule and on manual `workflow_dispatch`.
2. Resolves the latest stable VS Code version from
   `https://update.code.visualstudio.com/api/releases/stable` (or uses the version you pass).
3. Shallow-sparse-clones `microsoft/vscode` at that release tag.
4. Builds the **Node tarballs** (`scripts/build.ts`): copies each server's `src/`,
   generates an exact-pinned `package.json`, compiles with `tsc`, prunes
   devDependencies, and tars a self-contained `bin/` + `out/` + `node_modules/`.
5. Builds the **JSR package** (`scripts/prepare-jsr.ts`): rewrites imports to
   `npm:` specifiers, converts type-only re-exports to `export type`, and emits
   `jsr/` with `deno.json`.
6. Publishes to JSR (`deno publish`) and creates a GitHub Release with the tarballs.

The workflow skips if a release for that VS Code version already exists; pass
`force: true` on a manual run to overwrite it.

### Secrets

- `DENO_AUTH_TOKEN` — a JSR publish token (from https://jsr.io → your scope → Settings).
  If unset, the JSR publish step is skipped and only the GitHub Release is produced.

## Build locally

```sh
deno run --allow-all scripts/build.ts 1.133.0      # Node tarballs -> dist/
deno run --allow-all scripts/prepare-jsr.ts 1.133.0 # JSR package -> jsr/
```

Requires `git`, `deno`, `npm`, and `tar`.

## Notes & deviations from stock VS Code

- The servers are compiled to **ESM** (same as stock VS Code) with target `es2022`.
- The **html** server statically imports `typescript` for its embedded
  `<script>` completion. Stock VS Code aliases `typescript` to the native
  `@typescript/typescript6` preview; that native API is not a drop-in for the
  classic compiler API the html server uses, so this repo pins classic
  `typescript@5.9.x`. Embedded JS/TS completion is provided on a best-effort
  basis; core HTML features are unaffected.
- The JSR package is published with `--no-check`: the `-next` language-service
  packages pin conflicting exact `vscode-languageserver-types` versions that
  Deno's npm resolver cannot deduplicate (npm "overrides" are not supported by
  Deno). This only affects type-checking — the servers run correctly.
- For Deno, type-only re-exports (e.g. `Definition`) are rewritten to
  `export type`, and the html `javascriptLibs.ts` is patched to resolve the
  TypeScript lib directory via Deno's npm resolution.

## License

MIT. The extracted server code is © Microsoft Corporation, licensed under the
MIT license (a copy of VS Code's `LICENSE.txt` ships in each Node tarball). See
[LICENSE](LICENSE) for this repository's license.
