# パーティクルフィルタ シミュレーター

ノイズに埋もれた「隠れた状態」を、重み付きの粒子群で推定するパーティクルフィルタ（逐次モンテカルロ法）のツールです。粒子数・ノイズ・リサンプリング方式を変えると、推定誤差と有効サンプルサイズがどう変わるかをリアルタイムで観察できます。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/particle-filter.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/particle-filter.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/particle-filter.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/particle-filter
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
