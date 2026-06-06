# 心電図 ST 部分析シミュレーター

心電図 (ECG) の ST セグメントは、心筋の虚血・梗塞を見つけ出すための「窓」です。ST 偏移量・誘導・性別・年齢・心拍数を変えると、第4次 UDMI 2018 基準で STEMI／NSTEMI／正常の判定、QTc 補正、緊急度スコアがリアルタイムに更新され、虚血の重症度を可視化できます。

**Category:** 医工学・心電図

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ekg-st-segment-analysis.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ekg-st-segment-analysis.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ekg-st-segment-analysis.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ekg-st-segment-analysis
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
