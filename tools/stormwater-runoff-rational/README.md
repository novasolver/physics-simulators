# 合理式による雨水流出量シミュレーター

小さな流域に降った雨が、どれだけのピーク流量となって排水管に流れ込むのかを合理式で計算するツールです。流域面積・流出係数・降雨強度を変えるとピーク流出量が、管径・管路勾配を変えるとマニング式による排水管の流下能力がリアルタイムで分かり、溢水しない管径を探せます。

**Category:** 環境工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/stormwater-runoff-rational.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/stormwater-runoff-rational.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/stormwater-runoff-rational.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/stormwater-runoff-rational
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
