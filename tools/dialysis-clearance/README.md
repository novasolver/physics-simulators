# 透析クリアランスと Kt/V シミュレーター

血液透析の「透析量」を表す標準指標 Kt/V を計算するツールです。ダイアライザのクリアランス・透析時間・尿素分布容積を変えると、Kt/V・尿素除去率・透析後の推定 BUN がリアルタイムで分かり、十分な透析が行われているかを評価できます。

**Category:** バイオメカニクス

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/dialysis-clearance.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/dialysis-clearance.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/dialysis-clearance.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/dialysis-clearance
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
