# 歩行解析 空間-時間パラメータシミュレーター

歩行速度・ケイデンス・脚長から、歩幅、ストライド長、歩行周期、立脚期/遊脚期、Froude数、転倒リスクをリアルタイムで算出します。正常歩行と、高齢者・脳卒中後・パーキンソン病・アスリートの典型的な歩容パラメータを比較しながら、リハビリやスポーツ評価に活用できます。

**Category:** リハビリ工学・生体力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/gait-cycle-spatial-temporal.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/gait-cycle-spatial-temporal.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/gait-cycle-spatial-temporal.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/gait-cycle-spatial-temporal
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
