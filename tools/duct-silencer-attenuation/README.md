# HVAC ダクト消音器の減衰量シミュレーター — 吸音ライニング型

空調・換気ダクトに取り付ける吸音ライニング型消音器（サイレンサ）の挿入損失を、Sabine の経験式でリアルタイム計算するツールです。ダクト幅・高さ・消音器長さ・吸音率・風速を変えると、周波数別の減衰量と流動再発生騒音・圧力損失のトレードオフが一目で分かります。

**Category:** 建築音響

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/duct-silencer-attenuation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/duct-silencer-attenuation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/duct-silencer-attenuation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/duct-silencer-attenuation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
