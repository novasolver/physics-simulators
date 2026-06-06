# 断熱火炎温度シミュレーター

燃料が空気中で燃えるときに到達する理論上限温度（断熱火炎温度 T_ad）を計算するツールです。燃料の低位発熱量 LHV・過剰空気率・入口温度を変えると、温度上昇 ΔT と T_ad がリアルタイムで分かり、バーナーや燃焼器の設計上限を見積もれます。

**Category:** 燃焼工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/adiabatic-flame-temperature.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/adiabatic-flame-temperature.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/adiabatic-flame-temperature.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/adiabatic-flame-temperature
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
