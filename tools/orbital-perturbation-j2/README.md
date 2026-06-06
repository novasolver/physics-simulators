# J2摂動による軌道変動シミュレーター — 太陽同期軌道設計

地球は完全な球ではなく、赤道が約21km膨らんだ扁平回転体。この J2項（係数 1.08×10⁻³）が人工衛星の軌道面を歳差させ、近地点を回転させます。軌道長半径・離心率・傾斜角を変えると、昇交点赤経 Ω と近地点引数 ω の永年変動率がリアルタイムで分かり、太陽同期軌道（SSO）や凍結軌道の条件を探せます。

**Category:** 宇宙工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/orbital-perturbation-j2.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/orbital-perturbation-j2.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/orbital-perturbation-j2.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/orbital-perturbation-j2
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
