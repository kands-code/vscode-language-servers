# vscode-language-servers

CSS, HTML, and JSON language servers extracted from
[microsoft/vscode](https://github.com/microsoft/vscode) and published to
[JSR](https://jsr.io/@qarks/vscode-language-servers). A GitHub Actions workflow
publishes new VS Code releases automatically.

| Binary                        | Languages         | Source in microsoft/vscode                 |
| ----------------------------- | ----------------- | ------------------------------------------ |
| `vscode-css-language-server`  | CSS / LESS / SCSS | `extensions/css-language-features/server`  |
| `vscode-html-language-server` | HTML              | `extensions/html-language-features/server` |
| `vscode-json-language-server` | JSON / JSONC      | `extensions/json-language-features/server` |

Markdown is published separately as
[vscode-markdown-languageserver](https://www.npmjs.com/package/vscode-markdown-languageserver).

## Install

Requires [Deno](https://deno.com/).

```sh
deno install --global -A -n vscode-css-language-server jsr:@qarks/vscode-language-servers/css
deno install --global -A -n vscode-html-language-server jsr:@qarks/vscode-language-servers/html
deno install --global -A -n vscode-json-language-server jsr:@qarks/vscode-language-servers/json
```

- `-n` sets the binary name; without it, `deno install` names the binary after
  the package.
- Deno withholds releases younger than 24 hours; pass
  `--minimum-dependency-age=0` to install right away.

Each binary is an LSP server on stdio — no flags needed. `--stdio` and
`--clientProcessId=<pid>` (exit when the parent process dies) also work.

## Editor setup

Neovim with [lspconfig](https://github.com/neovim/nvim-lspconfig):

```lua
require('lspconfig').cssls.setup {
  cmd = { 'vscode-css-language-server' },
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

[.github/workflows/publish.yml](.github/workflows/publish.yml) runs weekly and
on manual trigger. It resolves the latest VS Code release, skips versions
already on JSR, and otherwise:

1. runs `scripts/prepare-jsr.ts`, which checks out that VS Code release (reusing
   a local shallow sparse clone), copies the three servers into `jsr/`, rewrites
   their imports for Deno, and writes `deno.json` and `README.md`;
2. type-checks the generated package with `deno check`;
3. runs `scripts/smoke-test.ts`, which performs an LSP initialize/shutdown
   handshake with each server over stdio;
4. publishes to JSR with `deno publish --check`.

Versions below 1.133.0 are refused. For 1.133.0–1.137.x, one type-only CSS
conflict is patched (see Notes).

Publishing needs one secret: `DENO_AUTH_TOKEN` (a JSR publish token).

## Build locally

Requires `git` and `deno`.

```sh
deno task prepare 1.133.0   # writes jsr/
deno task check:jsr         # type-check the generated package
deno task smoke             # LSP handshake smoke test
```

## Notes

- **Embedded JS/TS completion (HTML server):** the server imports `typescript`,
  pinned to the last JavaScript-based release (`6.0.x`), because npm's Go-based
  `typescript@7` does not implement the `ts.*` LanguageService API it relies on.
  This completion is best-effort; HTML features are unaffected.
- **CSS type patch (< 1.138.0):** `vscode-css-languageservice` pins
  `vscode-languageserver-types@3.17.5` while `vscode-languageserver@next` pulls
  `3.17.6-next.7`, so their LSP `CodeActionContext` types differ. The generated
  code gets a single `as any` cast at the `doCodeActions2` call so `deno check`
  passes. Upstream fixed this in 1.138.0; later versions are extracted
  unpatched.
- **No socket/pipe transports:** the pinned `-next` packages implement
  `--socket` / `--pipe` / `--node-ipc` differently from Deno's runtime, so only
  stdio is usable.

## License

MIT. Extracted code is © Microsoft Corporation (VS Code's `LICENSE.txt` ships in
the package). See [LICENSE](LICENSE).
