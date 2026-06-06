# IC50/EC50 用量応答 Hill 式シミュレーター

創薬の現場で必ず登場する用量応答曲線（Dose-Response Curve）を、Hill 式 Y = B + (T-B)/(1+(IC50/[D])^n) でリアルタイム計算するツールです。IC50・Hill 係数・最大／基線応答を変えながら、pIC50・治療指数・任意用量での応答率を即座に確認できます。

**Category:** 薬理学・創薬

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ic50-dose-response-pharma.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ic50-dose-response-pharma.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ic50-dose-response-pharma.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ic50-dose-response-pharma
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
