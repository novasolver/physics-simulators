# LEDの直列電流制限抵抗シミュレーター

LEDを点灯させるための「電流制限抵抗」をオームの法則で設計するツールです。電源電圧・順方向電圧・順方向電流・直列個数を入力すると、必要抵抗値・E12標準値・実電流・電力・効率がリアルタイムで分かり、LED回路の基本設計が一度で完了します。

**Category:** 電子回路

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/led-series-resistor.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/led-series-resistor.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/led-series-resistor.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/led-series-resistor
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
