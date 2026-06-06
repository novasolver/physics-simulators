# 電気自動車 EV 航続距離・消費電力シミュレーター

バッテリー容量・車両諸元・走行モード・外気温から、電気自動車（BEV）の電費（Wh/km）と航続距離をリアルタイム計算するツールです。空気抵抗と転がり抵抗、補機電力（空調・ヒーター）まで含めたエネルギー収支を可視化し、車両設計や購入時の比較検討に使えます。

**Category:** 自動車工学・EV

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ev-driving-range-energy.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ev-driving-range-energy.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ev-driving-range-energy.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ev-driving-range-energy
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
