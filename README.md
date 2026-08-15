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

Each binary is an LSP server on stdio — no `--stdio` flag is needed.

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
   rewrites their imports for Deno, and writes `deno.json` + README,
3. publishes to JSR.

Needs one secret: `DENO_AUTH_TOKEN` (a JSR publish token).

## Build locally

```sh
deno run --allow-all scripts/prepare-jsr.ts 1.133.0   # writes jsr/
deno publish --dry-run --no-check --allow-dirty       # from jsr/
```

Needs `git` and `deno`.

## Notes

- The HTML server imports `typescript` for embedded `<script>` completion. VS
  Code ships a newer native preview that is not a drop-in for the API the server
  uses, so this repo pins `typescript@5.9.x`. Embedded JS/TS completion is
  best-effort; HTML features are unaffected.
- Published with `--no-check`: two `-next` npm packages pin conflicting exact
  versions Deno cannot deduplicate. This only affects type-checking; the servers
  run fine.
- Two JSR score items must be set by hand in the package settings on jsr.io:
  **Description** and **Runtime compatibility → Deno**.

## License

MIT. Extracted code is © Microsoft Corporation (VS Code's `LICENSE.txt` ships in
the package). See [LICENSE](LICENSE).
