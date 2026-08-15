# vscode-language-servers

CSS, HTML, and JSON language servers extracted from
[microsoft/vscode](https://github.com/microsoft/vscode), published to
[JSR](https://jsr.io/@qarks/vscode-language-servers). A GitHub Actions workflow
keeps them up to date automatically.

| Binary                        | Languages         | Source in microsoft/vscode                 |
| ----------------------------- | ----------------- | ------------------------------------------ |
| `vscode-css-language-server`  | CSS / LESS / SCSS | `extensions/css-language-features/server`  |
| `vscode-html-language-server` | HTML              | `extensions/html-language-features/server` |
| `vscode-json-language-server` | JSON / JSONC      | `extensions/json-language-features/server` |

Not included: markdown (published separately as
[`vscode-markdown-languageserver`](https://www.npmjs.com/package/vscode-markdown-languageserver))
and eslint (left the VS Code repo long ago).

## Install

Requires [Deno](https://deno.com/).

```sh
deno install --global -A -n vscode-css-language-server jsr:@qarks/vscode-language-servers/css
deno install --global -A -n vscode-html-language-server jsr:@qarks/vscode-language-servers/html
deno install --global -A -n vscode-json-language-server jsr:@qarks/vscode-language-servers/json
```

`-n` is required: without it, `deno install` names the binary after the package.
Deno holds back releases younger than 24 hours; add `--minimum-dependency-age=0`
to install right away.

Each binary is an LSP server on stdio — no flags needed. `--stdio` and
`--clientProcessId=<pid>` (exit when the parent dies) also work.

## Editor setup

Neovim with [lspconfig](https://github.com/neovim/nvim-lspconfig):

```lua
require('lspconfig').cssls.setup {
  cmd = { '/path/to/vscode-css-language-server' },
}
```

Helix (`languages.toml`):

```toml
[language-server.css-ls]
command = "vscode-css-language-server"

[[language]]
name = "css"
language-servers = ["css-ls"]
```

## How it works

[`.github/workflows/publish.yml`](.github/workflows/publish.yml) runs twice a
day and on manual trigger. It finds the latest VS Code release, skips versions
already on JSR, and otherwise:

1. clones that release of microsoft/vscode (shallow, sparse),
2. runs `scripts/prepare-jsr.ts`, which copies the three servers into `jsr/`,
   rewrites their imports for Deno, patches one type-only CSS conflict, and
   writes `deno.json` + README,
3. type-checks the generated package with `deno check`,
4. runs `scripts/smoke-test.ts`, which starts each server and completes an LSP
   initialize/shutdown handshake over stdio,
5. publishes to JSR with `deno publish --check`.

Needs one secret: `DENO_AUTH_TOKEN` (a JSR publish token).

## Build locally

```sh
deno run --allow-all scripts/prepare-jsr.ts 1.133.0   # writes jsr/

# type-check and smoke-test the generated package
cd jsr
deno check css/node/cssServerMain.ts html/node/htmlServerMain.ts json/node/jsonServerMain.ts
cd ..

deno run --allow-all scripts/smoke-test.ts
```

Needs `git` and `deno`.

## Notes

- The HTML server imports `typescript` for embedded `<script>` completion. VS
  Code ships a newer native preview that is not a drop-in for the API the server
  uses, so this repo pins `typescript@5.9.x`. Embedded JS/TS completion is
  best-effort; HTML features are unaffected.
- The CSS server is type-checked with a single compatibility cast:
  `vscode-css-languageservice` pins `vscode-languageserver-types@3.17.5` exactly
  while `vscode-languageserver@next` pulls `3.17.6-next.7`, so the LSP
  `CodeActionContext` types differ. The generated code is patched at the one
  boundary where that matters, which lets publishing use `--check`.
- `--socket` / `--pipe` / `--node-ipc` are not usable: the pinned `-next`
  packages implement the socket/pipe transports backwards, and Deno has no IPC
  channel.

## License

MIT. Extracted code is © Microsoft Corporation (VS Code's `LICENSE.txt` ships in
the package). See [LICENSE](LICENSE).
