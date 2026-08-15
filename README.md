# vscode-language-servers

Language servers extracted from [microsoft/vscode](https://github.com/microsoft/vscode), kept up to date automatically by GitHub Actions and published to [JSR](https://jsr.io/@qarks/vscode-language-servers).

A modern, Deno-native successor to [`hrsh7th/vscode-langservers-extracted`](https://github.com/hrsh7th/vscode-langservers-extracted), which is no longer maintained while VS Code keeps moving.

## Included servers

| Command                        | Language            | Source (in microsoft/vscode)                        |
| ----------------------------- | ------------------- | --------------------------------------------------- |
| `vscode-css-language-server`  | CSS / LESS / SCSS   | `extensions/css-language-features/server`           |
| `vscode-html-language-server` | HTML                | `extensions/html-language-features/server`          |
| `vscode-json-language-server` | JSON / JSONC        | `extensions/json-language-features/server`          |

> Not included: **markdown** (now published separately as [`vscode-markdown-languageserver`](https://www.npmjs.com/package/vscode-markdown-languageserver)) and **eslint** (moved out of the VS Code repo long ago).

## Install

```sh
deno install --global -A -n vscode-css-language-server jsr:@qarks/vscode-language-servers/css
deno install --global -A -n vscode-html-language-server jsr:@qarks/vscode-language-servers/html
deno install --global -A -n vscode-json-language-server jsr:@qarks/vscode-language-servers/json
```

Each installs a `~/.deno/bin/vscode-*-language-server` wrapper. Requires Deno
(npm dependencies are fetched on first run).

> **The `-n` name**: `deno install` cannot infer a name like
> `vscode-css-language-server` from a single JSR package (it defaults to the
> package name `vscode-language-servers`), so `-n` is required. Avoiding it
> would mean splitting into three separate JSR packages, which is more
> maintenance than it's worth for a single package.
>
> **Within 24 hours of a new release**: Deno 2.9+ applies a 24-hour "minimum
> dependency age" to JSR packages, so a freshly published version is rejected.
> Add `--minimum-dependency-age=0` to install immediately, or wait 24 hours and
> drop the flag.

These servers speak LSP over **stdio by default** — no `--stdio` flag is needed.

### Neovim (lspconfig)

```lua
require('lspconfig').cssls.setup {
  cmd = { '/Users/you/.deno/bin/vscode-css-language-server' },
}
```

### Helix

In `languages.toml`:

```toml
[language-server.css-ls]
command = "vscode-css-language-server"

[[language]]
name = "css"
language-servers = ["css-ls"]
```

## How it works

A Deno-based GitHub Actions workflow ([`.github/workflows/publish.yml`](.github/workflows/publish.yml)):

1. Runs on a schedule and on manual `workflow_dispatch`.
2. Resolves the latest stable VS Code version from
   `https://update.code.visualstudio.com/api/releases/stable` (or uses the version you pass).
3. Skips if that version is already published on JSR.
4. Shallow-sparse-clones `microsoft/vscode` at that release tag.
5. `scripts/prepare-jsr.ts` copies each server's `src/`, rewrites bare imports to
   `npm:` specifiers, converts type-only re-exports to `export type`, and emits
   `jsr/` with `deno.json`.
6. Publishes to JSR with `deno publish`.

### Secrets

- `DENO_AUTH_TOKEN` — a JSR publish token (from https://jsr.io → your scope → Settings → Publish token).

## Build locally

```sh
deno run --allow-all scripts/prepare-jsr.ts 1.133.0   # JSR package -> jsr/
deno publish --dry-run --no-check --allow-dirty       # from jsr/ (preview)
```

Requires `git` and `deno`.

## Notes & deviations from stock VS Code

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

## JSR score

The package ships a `README.md`, examples, and `@module` docs on every entrypoint.
Two score items must be set manually in the JSR **package settings** (they cannot
be expressed in `deno.json`):

- **Description** — jsr.io → `@qarks/vscode-language-servers` → **Settings → Description**.
- **Runtime compatibility** — same **Settings** tab, mark **Deno** as compatible.
  (The package uses `npm:` specifiers and Deno's `import.meta.resolve`, so it is
  Deno-only; we intentionally do not claim Node/Bun compatibility.)

## License

MIT. The extracted server code is © Microsoft Corporation, licensed under the
MIT license (a copy of VS Code's `LICENSE.txt` ships in the JSR package). See
[LICENSE](LICENSE) for this repository's license.
