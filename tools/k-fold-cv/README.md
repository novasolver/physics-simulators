# K-分割交差検証シミュレーター — 多項式回帰の次数選択

1次元データに多項式回帰を行い、K-fold CV で最適な次数を選ぶ過程を可視化。訓練誤差と CV 誤差の差から、どの次数で過学習が始まるのかを直感的に学べます。

**Category:** 機械学習シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/k-fold-cv.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/k-fold-cv.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/k-fold-cv.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/k-fold-cv
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
