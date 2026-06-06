# ドロップアウト正則化シミュレーター

ニューラルネットワークの過学習を抑える「ドロップアウト」を体験するツールです。保持確率 p と層のニューロン数を変えると、ランダムに消えるニューロンのマスク、保持数の二項分布、1/p スケーリング、そして暗黙に訓練される部分ネットワークの総数 2ⁿ がリアルタイムで分かります。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/dropout-regularization.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/dropout-regularization.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/dropout-regularization.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/dropout-regularization
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
