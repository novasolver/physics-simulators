# 薄層乾燥 Page モデルシミュレーター — 食品・農産物の乾燥曲線

米・小麦・りんご・コーヒー豆など食品・農産物の薄層乾燥を、半経験的な Page モデル MR = exp(-k·t^n) で予測します。初期含水率・平衡含水率・温度・風速を変えて、半乾燥時間・実効拡散係数・必要エネルギー・褐変リスクをリアルタイムに把握できます。

**Category:** 食品・農産物加工

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/drying-kinetics-page-model.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/drying-kinetics-page-model.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/drying-kinetics-page-model.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/drying-kinetics-page-model
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
