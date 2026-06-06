# 電力ケーブルの許容電流シミュレーター

電力ケーブルに連続して流せる電流の上限「許容電流（アンペアシティ）」を設計するツールです。導体の材質・断面積・絶縁種類・周囲温度・敷設方法を変えると、絶縁の温度限界を超えない安全な電流値と発熱量がリアルタイムで分かります。

**Category:** 電気工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/power-cable-ampacity.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/power-cable-ampacity.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/power-cable-ampacity.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/power-cable-ampacity
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
