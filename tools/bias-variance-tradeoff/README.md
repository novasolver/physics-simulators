# バイアス・バリアンス トレードオフ シミュレーター

機械学習の汎化誤差を「バイアス²・バリアンス・ノイズ」の3つに分解して可視化するツールです。多項式モデルの次数を変えると、学習不足（高バイアス）と過学習（高バリアンス）のトレードオフ、そして総誤差がU字型になる様子がリアルタイムで分かります。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/bias-variance-tradeoff.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/bias-variance-tradeoff.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/bias-variance-tradeoff.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/bias-variance-tradeoff
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
