# 1D 線形オートエンコーダ・シミュレーター — PCAと等価な圧縮再構成

10次元の信号を K 次元のボトルネックへ通し、線形デコーダで戻すシンプルなオートエンコーダ。SGD で訓練していくと、誤差曲線と再構成バーの動きから、線形 AE が PCA と等価であることがじわじわ見えてきます。

**Category:** 機械学習シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/autoencoder-1d.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/autoencoder-1d.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/autoencoder-1d.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/autoencoder-1d
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
