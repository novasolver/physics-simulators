# 極配置法シミュレーター — 状態フィードバック設計

2次の単入力システム ẋ=Ax+Bu に対し、状態フィードバック u=-Kx のゲイン K を極配置法で設計するツールです。システム行列 A と希望する閉ループ極を変えると、必要なゲイン k1・k2、開ループ極、閉ループ応答がリアルタイムで分かり、系の応答を狙いどおりに合わせ込めます。

**Category:** 制御工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pole-placement-detail.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pole-placement-detail.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pole-placement-detail.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pole-placement-detail
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
