# コンクリート中性化深さ予測シミュレーター

大気中の CO₂ がコンクリートに侵入し pH を下げる「中性化」を Fick 拡散則で予測するツールです。セメント種別・W/C・湿度・CO₂濃度・かぶり厚を動かして、鉄筋の腐食開始年と100年寿命用の推奨かぶり厚を即座に検討できます。

**Category:** 土木材料・耐久性

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/concrete-carbonation-depth.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/concrete-carbonation-depth.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/concrete-carbonation-depth.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/concrete-carbonation-depth
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
