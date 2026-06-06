# マルチグリッド法シミュレーター — V サイクルで 1D ポアソン

1D ポアソン方程式を V サイクル多重格子で解き、粗格子からの補正で残差が桁違いに速く落ちる様子を Gauss-Seidel 単独と比較しながら可視化します。

**Category:** 数値計算シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/multigrid.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/multigrid.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/multigrid.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/multigrid
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
