# Haar ウェーブレット — 最も単純な基底・段差/エッジ信号向け

1D 信号に Haar ウェーブレットを再帰的に適用し、近似係数と詳細係数の係数ピラミッドを可視化。しきい値処理による圧縮率と再構成誤差をリアルタイムに学べます。

**Category:** 信号処理シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wavelet-haar.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wavelet-haar.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wavelet-haar.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wavelet-haar
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
