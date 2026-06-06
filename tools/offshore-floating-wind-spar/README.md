# 浮体式洋上風車 Spar/Semi-Sub 復原性シミュレーター

水深 50〜1500m に展開する浮体式洋上風車（FOWT）の復原性を可視化するツールです。Spar・Semi-Sub・TLP・Barge の 4 形式から選び、ロータ径・水深・有義波高・風速を変えると、ロータ推力・転覆モーメント・静的ピッチ角・ピッチ固有周期がリアルタイムで分かり、波周期共振リスクも判定します。

**Category:** 洋上風力・浮体設計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/offshore-floating-wind-spar.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/offshore-floating-wind-spar.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/offshore-floating-wind-spar.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/offshore-floating-wind-spar
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
