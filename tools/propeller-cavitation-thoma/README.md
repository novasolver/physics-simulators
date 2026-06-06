# 船舶プロペラ キャビテーション シミュレーター — Thoma 数と Burrill 線図

船舶プロペラのキャビテーション設計を、船速・回転数・直径・展開面積比から評価するツールです。Thoma 数 σ、推力負荷 τ_c、Burrill 線図の限界、Keller 式による推奨 EAR をリアルタイムに表示し、コンテナ船・LNG 船・軍艦など船種別の安全マージンが分かります。

**Category:** 船舶推進・流体機械

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/propeller-cavitation-thoma.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/propeller-cavitation-thoma.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/propeller-cavitation-thoma.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/propeller-cavitation-thoma
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
