# 断熱反応器の温度上昇シミュレーター

発熱反応が外部に熱を逃がさず進んだとき、反応液の温度がどこまで上がるかを計算するツールです。反応熱・初期濃度・転化率・反応液の密度と比熱を変えると、断熱温度上昇 ΔT_ad と反応器到達温度がリアルタイムで分かり、熱暴走の危険度を見積もれます。

**Category:** 反応工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/adiabatic-reactor-temperature.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/adiabatic-reactor-temperature.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/adiabatic-reactor-temperature.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/adiabatic-reactor-temperature
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
