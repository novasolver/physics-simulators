# ブシネスク式による地中応力シミュレーター

地表に加わった集中荷重が、地盤の中をどのように下方・外側へ広がっていくかを計算するツールです。荷重・深さ・水平距離を変えると、その点の鉛直応力増加と「圧力球根」の形がリアルタイムで分かり、沈下に影響する範囲を直感的につかめます。

**Category:** 地盤工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/boussinesq-stress.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/boussinesq-stress.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/boussinesq-stress.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/boussinesq-stress
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
