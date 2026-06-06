# ロケット推進シミュレーター

ツィオルコフスキー式 Δv = Isp·g0·ln(m0/mf) から比推力・質量比・推力・推重比・燃焼時間を解析。LH2/LOX、ケロシン、固体推進剤、貯蔵性推進剤を切り替えて性能比較ができ、排気プルーム粒子アニメーションも備えたロケット工学シミュレーターです。

**Category:** 航空宇宙

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rocket-propulsion.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rocket-propulsion.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rocket-propulsion.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rocket-propulsion
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
