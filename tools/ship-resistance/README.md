# 船舶抵抗推定・ハルスピード計算機

船舶の抵抗推定とハルスピード計算を、ホルトロップ-メネン法で実現。摩擦・造波・形状抵抗を分離計算し、有効馬力・軸馬力・燃料消費量・フルード数をリアルタイム推定。ITTC-57摩擦係数やフルード数を用いた理論に基づき、速力-抵抗曲線を描画するCAEツールの技術解説です。

**Category:** Naval Architecture

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ship-resistance.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ship-resistance.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ship-resistance.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ship-resistance
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
