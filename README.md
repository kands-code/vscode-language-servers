# vscode-language-servers

Language servers extracted from [microsoft/vscode](https://github.com/microsoft/vscode),
kept up to date automatically by GitHub Actions.

This is a modern successor to
[`hrsh7th/vscode-langservers-extracted`](https://github.com/hrsh7th/vscode-langservers-extracted),
which is no longer maintained while VS Code keeps moving.

## Included servers

| Command                       | Language          | Source (in microsoft/vscode)               |
| ----------------------------- | ----------------- | ------------------------------------------ |
| `vscode-css-language-server`  | CSS / LESS / SCSS | `extensions/css-language-features/server`  |
| `vscode-html-language-server` | HTML              | `extensions/html-language-features/server` |
| `vscode-json-language-server` | JSON / JSONC      | `extensions/json-language-features/server` |

> Not included: **markdown** (now published separately as
> [`vscode-markdown-languageserver`](https://www.npmjs.com/package/vscode-markdown-languageserver))
> and **eslint** (moved out of the VS Code repo long ago).

## Install

Download the release tarball for your VS Code version from
[Releases](https://github.com/kands-code/vscode-language-servers/releases),
extract it, and point your LSP client at the `bin/` launcher:

```sh
tar -xzf vscode-css-language-server-1.133.0.tar.gz
# the launcher is at ./bin/vscode-css-language-server
```

Each tarball is fully self-contained (compiled ESM output + pruned `node_modules`).
No `npm install` is required — you only need a modern Node.js runtime.

**Requirements:** Node.js **22+** (the servers are ESM and use `vscode-languageserver@10`).

### Neovim (lspconfig)

```lua
require('lspconfig').cssls.setup {
  cmd = { '/path/to/vscode-css-language-server/bin/vscode-css-language-server', '--stdio' },
}
```

> Note: the launcher already passes `--stdio`. Passing it again explicitly is harmless.

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

A GitHub Actions workflow ([`.github/workflows/release.yml`](.github/workflows/release.yml)):

1. Runs on a schedule and on manual `workflow_dispatch`.
2. Resolves the latest stable VS Code version from
   `https://update.code.visualstudio.com/api/releases/stable` (or uses the version you pass).
3. Shallow-sparse-clones `microsoft/vscode` at that release tag.
4. For each server, copies `server/src/` (and `server/lib/` for html),
   generates a self-contained `package.json`
   (exact-pinned deps read from the server's own `package-lock.json`)
   and a standalone `tsconfig.json`, then compiles with `tsc` and prunes devDependencies.
5. Uploads a self-contained tarball per server to a GitHub Release tagged `vscode-<version>`.

The workflow skips the build if a release for that VS Code version already exists;
pass `force: true` on a manual run to overwrite it.

## Build locally

```sh
node scripts/build.mjs 1.133.0
# artifacts land in ./dist/
```

Requires `git`, Node.js 22+, and `npm` on `PATH`.

## Notes & deviations from stock VS Code

- The servers are compiled to **ESM** (same as stock VS Code) with target `es2022`.
- The **html** server statically imports `typescript` for its embedded
  `<script>` completion. Stock VS Code aliases `typescript` to the native
  `@typescript/typescript6` preview; that native API is not a drop-in for the
  classic compiler API the html server uses, so this repo pins classic
  `typescript@5.9.x`. Embedded JS/TS completion is provided on a best-effort
  basis; core HTML features are unaffected.
- The html server's `javascriptLibs.ts` is patched
  to resolve the TypeScript lib directory via Node module resolution,
  so the tarball is relocatable (the stock code hard-codes a monorepo-relative path).

## License

MIT. The extracted server code is © Microsoft Corporation,
licensed under the MIT license (a copy of VS Code's `LICENSE.txt` ships in each tarball).
See [LICENSE](LICENSE) for this repository's license.
