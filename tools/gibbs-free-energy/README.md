# ギブズ自由エネルギー シミュレーター — 反応の自発性と平衡定数

ΔG = ΔH − TΔS により、エンタルピー変化 ΔH・エントロピー変化 ΔS・温度 T・ΔS の効果倍率から、ギブズ自由エネルギー変化 ΔG、TΔS、自発性判定、平衡定数 K = exp(−ΔG/RT) を実時間に計算します。ΔG-T 線図と van't Hoff 直線（1/T vs log K）で温度依存の自発性転移を可視化します。

**Category:** 化学熱力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/gibbs-free-energy.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/gibbs-free-energy.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/gibbs-free-energy.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/gibbs-free-energy
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
