# vscode-language-servers

CSS, HTML, and JSON language servers extracted from
[microsoft/vscode](https://github.com/microsoft/vscode), runnable on Node.js
and installable directly from GitHub. A GitHub Actions workflow tracks new
VS Code releases automatically: it extracts the servers, bundles them,
smoke-tests them over LSP stdio, commits the bundles, and tags the release.

| Binary                        | Languages         | Source in microsoft/vscode                 |
| ----------------------------- | ----------------- | ------------------------------------------ |
| `vscode-css-language-server`  | CSS / LESS / SCSS | `extensions/css-language-features/server`  |
| `vscode-html-language-server` | HTML              | `extensions/html-language-features/server` |
| `vscode-json-language-server` | JSON / JSONC      | `extensions/json-language-features/server` |

## Install

Requires Node.js ≥ 22.

```sh
npm install --global https://github.com/kands-code/vscode-language-servers/archive/refs/tags/1.141.0.tar.gz
```

This installs all three binaries. To install another version, change the tag.

> Install from a release tarball rather than a `github:` git spec: recent npm
> versions can leave global git dependencies as broken symlinks into the npm
> cache. Tarball installs are fetched and placed like registry packages.

Each binary is an LSP server over stdio. Like the upstream VS Code servers,
a transport flag is required: `--stdio`, or `--socket` / `--pipe` /
`--node-ipc` as supported by `vscode-languageserver` (`--stdio` is the only
transport that is smoke-tested here). `--clientProcessId=<pid>` (exit when
the parent process dies) also works.

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
on manual trigger. It resolves the latest VS Code release, skips versions
already tagged in this repo, and otherwise:

1. runs `scripts/extract.ts`, which checks out that VS Code release (reusing
   a local shallow sparse clone), copies the three servers into `servers/`,
   pins each server's dependencies to its `package-lock.json`, and installs
   them;
2. type-checks the sources with `tsc`;
3. bundles each server into a single CJS file under `dist/` with
   [Rolldown](https://rolldown.rs/);
4. runs `scripts/smoke-test.ts`, which performs an LSP initialize/shutdown
   handshake with each server over stdio;
5. commits `dist/` and `lib/` to the default branch and tags the release.

Publishing needs no registry and no secrets: installation goes through
npm's support for tarball URLs, and the release artifacts live in the
repository itself.

Versions below 1.138.0 are refused.

## Build locally

Requires Node.js ≥ 22, `git`, and `npm`.

```sh
npm install
npm run extract -- 1.140.0   # writes servers/
npm run check                # type-check the sources
npm run build                # bundles dist/ and copies assets
npm run smoke                # LSP handshake smoke test
```

## Notes

- **Embedded JS/TS completion (HTML server):** the server imports
  `typescript`, pinned to the last JavaScript-based release (`6.0.x`), because
  npm's Go-based `typescript@7` does not implement the `ts.*`
  LanguageService API it relies on. The `typescript` package stays a real
  (unbundled) dependency so its `lib.*.d.ts` files are read from disk at
  runtime. This completion is best-effort; HTML features are unaffected.
- **stdio required:** the entrypoints are the stock upstream ones — no
  transport flag defaulting is patched in. Always pass `--stdio` (editors do
  this for you).

## License

MIT. Extracted code is © Microsoft Corporation (VS Code's `LICENSE.txt`
ships as `LICENSE.vscode.txt` in the package). See [LICENSE](LICENSE).
