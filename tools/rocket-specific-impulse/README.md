# ロケットの比推力シミュレーター

ロケットエンジンの推力・比推力・増速量 Δv を計算するツールです。推進剤の質量流量・排気速度・初期質量・終了質量を変えると、推力・比推力 I_sp・燃焼時間・質量比・Δv・総力積がリアルタイムで分かり、ツィオルコフスキーのロケット方程式を体感できます。

**Category:** 航空宇宙

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rocket-specific-impulse.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rocket-specific-impulse.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rocket-specific-impulse.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rocket-specific-impulse
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
