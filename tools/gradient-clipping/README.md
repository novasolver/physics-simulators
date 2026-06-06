# 勾配クリッピング シミュレーター

深層学習の「勾配爆発」を防ぐ勾配クリッピングを体験するツールです。クリップ閾値と学習率を変えると、ノルムクリップ・値クリップ・クリップなしが「崖」のある損失地形をどう降りていくかが、等高線上の軌跡と損失・勾配ノルムの推移グラフでリアルタイムに分かります。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/gradient-clipping.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/gradient-clipping.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/gradient-clipping.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/gradient-clipping
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
