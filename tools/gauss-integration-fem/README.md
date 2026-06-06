# ガウス求積法シミュレーター

有限要素法（FEM）で要素剛性マトリクスを積分するために使われる、ガウス・ルジャンドル求積法を体験するツールです。積分点数（1〜3点）と多項式の係数を変えると、数値積分の値・厳密値・誤差がリアルタイムで分かり、n点求積が2n-1次まで厳密になる仕組みを直感的に確認できます。

**Category:** 有限要素法

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/gauss-integration-fem.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/gauss-integration-fem.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/gauss-integration-fem.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/gauss-integration-fem
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
