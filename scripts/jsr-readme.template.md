# @qarks/vscode-language-servers

CSS, HTML, and JSON language servers extracted from
[microsoft/vscode](https://github.com/microsoft/vscode), published to JSR for
Deno. Version `{{version}}` tracks VS Code `{{version}}`.

## Install

```sh
deno install --global -A -n vscode-css-language-server jsr:@qarks/vscode-language-servers/css
deno install --global -A -n vscode-html-language-server jsr:@qarks/vscode-language-servers/html
deno install --global -A -n vscode-json-language-server jsr:@qarks/vscode-language-servers/json
```

## Usage

Each binary is an LSP server on stdio — no `--stdio` flag is needed.

### Neovim (lspconfig)

```lua
require('lspconfig').cssls.setup {
  cmd = { '/path/to/vscode-css-language-server' },
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

## License

MIT. Extracted server code is © Microsoft Corporation.
