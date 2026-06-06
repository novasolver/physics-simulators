# 波力発電装置 (WEC) 発電量シミュレーター

有義波高・ピーク周期・装置形式から、波エネルギー束 (kW/m) と単機・アレイの電気出力、年間発電量をリアルタイム計算します。点吸収体・Attenuator・OWC・Overtopping の補足幅効率と PTO 効率を反映した、海洋再生可能エネルギーの概算ツールです。

**Category:** 海洋エネルギー

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wave-energy-converter.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wave-energy-converter.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wave-energy-converter.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wave-energy-converter
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
