# 学習曲線シミュレーター — 過学習・学習不足の診断

機械学習モデルが「過学習」しているのか「学習不足」なのかを、学習曲線（学習データ量に対する学習誤差と検証誤差のグラフ）で診断するツールです。モデルの複雑さ・データ数・ノイズ・正則化を変え、2本の曲線が収束するかどうかをリアルタイムで観察できます。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/learning-curve.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/learning-curve.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/learning-curve.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/learning-curve
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
