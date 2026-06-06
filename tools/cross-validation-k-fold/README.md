# k-fold 交差検証シミュレーター

機械学習モデルの「未知データへの予測能力」を客観的に評価する k 分割交差検証を体感するツールです。サンプル数・分割数 k・モデル複雑度・雑音を動かすと、訓練誤差・CV 誤差・標準誤差・汎化ギャップがリアルタイムで変化し、バイアスと分散のトレードオフが直感的に分かります。

**Category:** 機械学習・統計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/cross-validation-k-fold.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/cross-validation-k-fold.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/cross-validation-k-fold.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/cross-validation-k-fold
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
