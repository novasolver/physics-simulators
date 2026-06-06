# 無響室 低域カットオフ・吸音楔設計シミュレーター

無響室（アネコイックチャンバー）の自由音場下限周波数と吸音楔の必要長さを設計するツールです。室寸法・楔長・密度・目標カットオフを変えると、低域カットオフ周波数・自由音場体積・最小測定距離がリアルタイムで算出され、スピーカー測定や HRTF 計測に十分な性能を確保できるかを評価できます。

**Category:** 建築音響・実験室

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/anechoic-chamber-low-cutoff.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/anechoic-chamber-low-cutoff.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/anechoic-chamber-low-cutoff.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/anechoic-chamber-low-cutoff
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
