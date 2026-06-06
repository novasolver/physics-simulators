# Kriging サロゲートモデル シミュレーター — ガウス過程回帰

CFD や FEM の高コスト評価を少数の訓練点で代替する Kriging（ガウス過程回帰）。SE / Matérn カーネルと相関長 ℓ・ナゲット σ_n² を変えながら、予測平均と95%信用区間・対数周辺尤度・RMSE の振る舞いを直感的に学べます。

**Category:** サロゲート / 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/kriging-surrogate-model.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/kriging-surrogate-model.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/kriging-surrogate-model.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/kriging-surrogate-model
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
