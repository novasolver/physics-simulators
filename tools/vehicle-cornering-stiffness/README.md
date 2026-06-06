# 車両コーナリング・スティフネス シミュレーター — 自転車モデル & US Gradient

線形2自由度（自転車）モデルで前後輪コーナリング剛性 C_α、アンダーステア勾配 K、特性速度・臨界速度、定常ヨーレートゲイン、旋回半径をリアルタイム計算。Gillespie の式で K の符号から US / Neutral / OS を判定し、操縦特性の安定領域を可視化します。

**Category:** 車両工学・操舵特性

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/vehicle-cornering-stiffness.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/vehicle-cornering-stiffness.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/vehicle-cornering-stiffness.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/vehicle-cornering-stiffness
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
