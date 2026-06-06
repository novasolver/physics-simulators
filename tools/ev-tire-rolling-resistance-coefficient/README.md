# EV タイヤ 転がり抵抗係数・航続距離影響

EV の航続距離は、電池容量と同じくらい「タイヤの転がり抵抗係数 CRR」で決まります。タイヤ種別・空気圧・路面・温度・速度を変えると、転がり抵抗 F_roll と空力抵抗 F_aero の内訳・100km 電費・航続距離がリアルタイムで見え、低転がりタイヤの効果を定量的に評価できます。

**Category:** EV・タイヤ性能

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ev-tire-rolling-resistance-coefficient.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ev-tire-rolling-resistance-coefficient.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ev-tire-rolling-resistance-coefficient.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ev-tire-rolling-resistance-coefficient
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
