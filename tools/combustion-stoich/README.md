# 燃焼化学量論計算ツール

NovaSolverの燃焼化学量論計算ツールで、メタン・プロパン・オクタン・水素の燃焼をシミュレーション。空気過剰率を調整するだけで、排ガス組成（CO₂, H₂O, O₂, N₂）と断熱火炎温度がリアルタイムに可視化されます。燃焼工学やCFDの学習・研究に最適なインタラクティブツールです。

**Category:** 解析ツール

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/combustion-stoich.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/combustion-stoich.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/combustion-stoich.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/combustion-stoich
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
