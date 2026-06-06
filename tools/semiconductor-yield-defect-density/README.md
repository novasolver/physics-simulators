# 半導体歩留 欠陥密度シミュレーター

半導体ウェーハの歩留 (Yield) を Poisson・Murphy・Seeds (Negative Binomial)・Bose-Einstein の4モデルで比較計算するツールです。ダイサイズ・欠陥密度 D₀・クリティカル層数・設計ルールを変えると、A·D・歩留・ウェーハあたりダイ数・良品単価がリアルタイムで更新されます。

**Category:** 半導体製造・品質工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/semiconductor-yield-defect-density.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/semiconductor-yield-defect-density.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/semiconductor-yield-defect-density.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/semiconductor-yield-defect-density
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
