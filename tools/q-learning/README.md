# Q学習シミュレーター — 強化学習グリッドワールド

強化学習の基礎であるQ学習を、迷路のようなグリッドワールドで動かして体験するツールです。学習率・割引率・探索率を変えると、エージェントが報酬だけを頼りにゴールへの最適経路を学んでいく過程と、価値関数の収束がリアルタイムで分かります。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/q-learning.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/q-learning.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/q-learning.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/q-learning
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
