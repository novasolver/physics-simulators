# ロケット方程式シミュレーター

最大3段ロケットの各段に質量・比推力（Isp）を設定し、ツィオルコフスキーの方程式でΔvを計算。重力損失・空気抵抗損失を考慮してLEO/GEO/月軌道の目標Δvと比較できます。

**Category:** 宇宙推進

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rocket-equation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rocket-equation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rocket-equation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rocket-equation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
