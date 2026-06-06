# Adam オプティマイザ シミュレーター

深層学習の学習を支える定番アルゴリズム Adam を体験するツールです。学習率・β₁・β₂を変えると、一次モーメント（モメンタム）と二次モーメント（適応的学習率）の組み合わせが細長い谷をどう降りていくかが、等高線上の軌跡と損失の収束曲線でリアルタイムに分かります。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/adam-optimizer.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/adam-optimizer.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/adam-optimizer.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/adam-optimizer
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
