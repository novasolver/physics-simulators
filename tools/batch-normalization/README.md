# バッチ正規化シミュレーター

ディープニューラルネットワークの学習を安定させる「バッチ正規化（Batch Normalization）」を可視化するツールです。ミニバッチの平均・標準偏差、スケールγ、シフトβを変えると、ある活性値が正規化値x̂を経てBN出力yになる過程と、層をまたぐ分布の変化がリアルタイムで分かります。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/batch-normalization.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/batch-normalization.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/batch-normalization.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/batch-normalization
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
