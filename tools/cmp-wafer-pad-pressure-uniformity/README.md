# 半導体 CMP ウェハ・パッド圧力均一性シミュレーター — Preston

半導体ウェハ CMP（化学機械研磨）の平均圧力・相対速度・除去レート（Preston 式 MRR=Kp·P·V）と WIWNU 不均一性、推定歩留りを実時間で計算。ウェハサイズ、荷重、パッド、リテーナーリング圧、回転、スラリー、プロセスを変えて 300mm GAA 3nm までの研磨レシピを設計できる無料シミュレーターです。

**Category:** 半導体・CMP プロセス

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/cmp-wafer-pad-pressure-uniformity.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/cmp-wafer-pad-pressure-uniformity.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/cmp-wafer-pad-pressure-uniformity.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/cmp-wafer-pad-pressure-uniformity
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
