# カプラン・マイヤー生存分析シミュレーター

打ち切りデータを含む生存時間データから、カプラン・マイヤー法で生存曲線を推定するツールです。対象者数・真の生存中央値・打ち切り割合を変えると、特徴的な階段状の生存曲線、評価時点の生存率、リスク集合の推移がリアルタイムで分かります。

**Category:** 統計解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/kaplan-meier-survival.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/kaplan-meier-survival.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/kaplan-meier-survival.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/kaplan-meier-survival
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
