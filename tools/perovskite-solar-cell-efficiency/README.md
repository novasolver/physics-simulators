# ペロブスカイト太陽電池 効率シミュレーター

ペロブスカイト太陽電池の Jsc・Voc・FF・PCE を Shockley-Queisser 詳細釣り合いから推算。組成（MAPbI₃/FAPbI₃/mixed/wide-gap）、バンドギャップ、欠陥密度、Si タンデムを切り替えて効率限界と実効 PCE を比較できる無料ツールです。

**Category:** 次世代太陽電池・ペロブスカイト

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/perovskite-solar-cell-efficiency.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/perovskite-solar-cell-efficiency.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/perovskite-solar-cell-efficiency.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/perovskite-solar-cell-efficiency
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
