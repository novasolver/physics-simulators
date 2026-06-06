# 応答曲面法 RSM シミュレーター

プロセス条件や配合を「少ない実験回数で最適化する」ための定番手法、応答曲面法（RSM）のシミュレーターです。線形項・2次項・交互作用項のスライダーを動かすと、応答 y(x₁, x₂) の停留点・固有値・最適応答がリアルタイムで更新され、最大点・最小点・鞍点を自動で見分けられます。

**Category:** 実験計画・最適化

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/response-surface-methodology.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/response-surface-methodology.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/response-surface-methodology.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/response-surface-methodology
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
