# Vendored tree-sitter WASM grammars

These `.wasm` files drive scope-aware symbol navigation (see
[ADR 0027](../../docs/adr/0027-syntax-level-symbol-navigation.md)). They are
prebuilt artifacts copied verbatim from the published npm grammar packages, so
those packages are **not** kept as dependencies (nothing imports them at build
or runtime; the queries come from nvim-treesitter, see
`../../src/diff/symbol-nav/queries/ATTRIBUTION.md`).

| File | Source package | Version | Path inside package |
| --- | --- | --- | --- |
| `web-tree-sitter.wasm` | `web-tree-sitter` | 0.26.9 | `web-tree-sitter.wasm` |
| `tree-sitter-javascript.wasm` | `tree-sitter-javascript` | 0.23.1 | `tree-sitter-javascript.wasm` |
| `tree-sitter-typescript.wasm` | `tree-sitter-typescript` | 0.23.2 | `tree-sitter-typescript.wasm` |
| `tree-sitter-tsx.wasm` | `tree-sitter-typescript` | 0.23.2 | `tree-sitter-tsx.wasm` |
| `tree-sitter-python.wasm` | `tree-sitter-python` | 0.25.0 | `tree-sitter-python.wasm` |

## To re-vendor / bump a grammar

```sh
# in a scratch dir, install the exact version, then copy the .wasm out
npm i tree-sitter-typescript@0.23.2
cp node_modules/tree-sitter-typescript/tree-sitter-typescript.wasm \
   node_modules/tree-sitter-typescript/tree-sitter-tsx.wasm \
   <repo>/web/public/tree-sitter/
```

`web-tree-sitter` ships its runtime `.wasm` alongside the JS package of the same
name (kept as a normal dependency). Do not re-add the grammar packages to
`package.json`; copy their `.wasm` and discard them.
