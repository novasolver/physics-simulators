# ラテン超立方サンプリング — LHS と単純モンテカルロの比較

ラテン超立方サンプリング（LHS）シミュレーターは2次元の層化サンプリングを単純モンテカルロと比較し、同じサンプル数で積分精度がどれだけ改善するかをリアルタイムに可視化します。各行・各列に1点を配置する仕組みと2D散布図を直接確認できます。

**Category:** 数理・統計シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/latin-hypercube.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/latin-hypercube.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/latin-hypercube.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/latin-hypercube
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
