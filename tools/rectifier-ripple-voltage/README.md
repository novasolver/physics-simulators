# 整流回路のリプル電圧シミュレーター

ダイオードブリッジで整流し、平滑コンデンサでならしたDC電源に残る「リプル電圧」を計算するツールです。電源周波数・負荷電流・コンデンサ容量・整流方式を変えると、ピーク間リプル・DC平均電圧・リプル率がリアルタイムで分かり、低リプルな電源を設計できます。

**Category:** 電力電子

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rectifier-ripple-voltage.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rectifier-ripple-voltage.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rectifier-ripple-voltage.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rectifier-ripple-voltage
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
