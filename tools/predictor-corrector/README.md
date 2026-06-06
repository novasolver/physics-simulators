# 予測子修正子法シミュレーター — ホイン法

常微分方程式を解く2段階の数値積分法「ホイン法（予測子修正子法）」を可視化するツールです。オイラー法で予測し台形公式で修正する仕組みを、刻み幅 h と初期値を変えながら確認でき、オイラー法に対する誤差改善率と厳密解との一致がリアルタイムで分かります。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/predictor-corrector.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/predictor-corrector.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/predictor-corrector.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/predictor-corrector
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
