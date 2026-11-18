# vscode-language-servers

CSS, HTML, and JSON language servers extracted from
[microsoft/vscode](https://github.com/microsoft/vscode), runnable on Node.js
and installable from GitHub. A scheduled workflow extracts, builds, and tags
each new VS Code release.

| Binary                        | Languages         | Source in microsoft/vscode                 |
| ----------------------------- | ----------------- | ------------------------------------------ |
| `vscode-css-language-server`  | CSS / LESS / SCSS | `extensions/css-language-features/server`  |
| `vscode-html-language-server` | HTML              | `extensions/html-language-features/server` |
| `vscode-json-language-server` | JSON / JSONC      | `extensions/json-language-features/server` |

## Install

Requires Node.js ≥ 24.

```sh
npm install --global https://github.com/kands-code/vscode-language-servers/archive/refs/tags/1.146.0.tar.gz
```

This installs all three binaries. To install another version, change the tag.

> Install from a release tarball rather than a `github:` git spec: recent npm
> versions can leave global git dependencies as broken symlinks into the npm
> cache. Tarball installs are placed like registry packages.

Each binary is an LSP server over stdio. Pass a transport flag such as
`--stdio`; `--socket`, `--pipe`, and `--node-ipc` are also supported.
`--clientProcessId=<pid>` exits when the parent process dies. `--stdio` is the
only transport covered by the smoke test.

## Editor setup

Neovim with [lspconfig](https://github.com/neovim/nvim-lspconfig):

```lua
require('lspconfig').cssls.setup {
  cmd = { 'vscode-css-language-server', '--stdio' },
}
```

Helix (`languages.toml`):

```toml
[language-server.css-ls]
command = "vscode-css-language-server"
args = ["--stdio"]

[[language]]
name = "css"
language-servers = ["css-ls"]
```

## How it works

[.github/workflows/publish.yml](.github/workflows/publish.yml) runs weekly and
on manual trigger. It uses the requested version or the latest stable VS Code
release, skips versions already tagged here, and otherwise:

1. sets `package.json` and the README install example to the release version;
2. runs `scripts/extract.ts`, which checks out that VS Code release into a
   shallow sparse clone, copies the three servers into `servers/`, pins their
   runtime dependencies from VS Code's extensions `pnpm-lock.yaml`, and
   installs them;
3. type-checks the sources with `tsc`;
4. bundles each server into `dist/<name>.cjs` with
   [Rolldown](https://rolldown.rs/);
5. smoke-tests each bundle over LSP stdio, including the HTML server's
   embedded `<script>` completion;
6. commits `dist/` and `lib/` and tags the release.

Publishing needs no registry or secrets: releases are npm-installable tarball
URLs served from this repository.

Versions below 1.146.0 are refused; that is where VS Code switched to the
pnpm extensions lock.

## Build locally

Requires Node.js ≥ 24, `git`, and `npm`.

```sh
npm install
npm run extract -- 1.146.0  # writes servers/
npm run format              # check formatting (oxfmt)
npm run lint                # lint (oxlint)
npm run check               # type-check the sources
npm run build               # bundle dist/ and copy assets
npm run smoke               # LSP smoke test
```

`npm run format:fix` and `npm run lint:fix` apply fixes in place.

## Notes

- **Embedded JS/TS completion (HTML server):** `scripts/extract.ts` pins
  `typescript` to the version from VS Code's extensions pnpm lock. It must
  stay on the JavaScript compiler (6.x); `typescript@7` is native-only and has
  neither the `ts.*` API nor the `lib.*.d.ts` files this feature reads. The
  package is not bundled. Completion is best-effort; HTML features are
  unaffected.

## License

MIT. Extracted code is © Microsoft Corporation (VS Code's `LICENSE.txt`
ships as `LICENSE.vscode.txt` in the package). See [LICENSE](LICENSE).
