# ケプラー方程式 数値解シミュレーター — Newton 法と反復収束

M = E − e sin E を Newton-Raphson 法で解く中上級者向けの数値シミュレーター。離心近点角 E と真近点角 ν を毎フレーム計算し、反復回数と残差の収束を確認できます。法則の概念理解は『ケプラーの法則』、軌道全体の挙動は『ケプラー軌道』を併用してください。

**Category:** 天体力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/kepler-equation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/kepler-equation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/kepler-equation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/kepler-equation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
