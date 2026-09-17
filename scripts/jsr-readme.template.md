# @qarks/vscode-language-servers

CSS, HTML, and JSON language servers extracted from
[microsoft/vscode](https://github.com/microsoft/vscode) and packaged for Deno.
Version `{{version}}` tracks VS Code `{{vscodeVersion}}`.

## Install

```sh
deno install --global -A -n vscode-css-language-server jsr:@qarks/vscode-language-servers/css
deno install --global -A -n vscode-html-language-server jsr:@qarks/vscode-language-servers/html
deno install --global -A -n vscode-json-language-server jsr:@qarks/vscode-language-servers/json
```

## Usage

Each binary is an LSP server on stdio — no flags needed. `--stdio` and
`--clientProcessId=<pid>` (exit when the parent process dies) also work.
`--socket` / `--pipe` / `--node-ipc` are not supported.

### Neovim (lspconfig)

```lua
require('lspconfig').cssls.setup {
  cmd = { 'vscode-css-language-server' },
}
```

### Helix

```toml
[language-server.css-ls]
command = "vscode-css-language-server"

[[language]]
name = "css"
language-servers = ["css-ls"]
```

## Notes

- Embedded `<script>` completion in the HTML server relies on the
  JavaScript-based `typescript@6.0.x`; it is best-effort.
- Source and build tooling:
  [kands-code/vscode-language-servers](https://github.com/kands-code/vscode-language-servers).

## License

MIT. Extracted server code is © Microsoft Corporation.
