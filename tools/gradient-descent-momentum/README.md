# モメンタム付き勾配降下法シミュレーター

機械学習の学習を支える最適化アルゴリズムを体験するツールです。学習率とモメンタム係数を変えると、通常の勾配降下法・モメンタム法・Nesterov加速勾配が細長い谷をどう降りていくかが、等高線上の軌跡と損失の収束曲線でリアルタイムに分かります。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/gradient-descent-momentum.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/gradient-descent-momentum.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/gradient-descent-momentum.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/gradient-descent-momentum
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
