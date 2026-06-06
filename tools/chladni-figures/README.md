# クラドニ図形 シミュレーター — 正方形板の振動モード

正方形板上の振動モード φ_mn(x,y) を Ritz 近似で合成し、節線（クラドニ図形）と相対固有振動数を可視化。モード次数 (m,n)、対称・反対称合成 α、節線閾値 ε を動かして、砂粒子が集まる節の幾何を観察できます。

**Category:** 振動・波動シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/chladni-figures.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/chladni-figures.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/chladni-figures.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/chladni-figures
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
