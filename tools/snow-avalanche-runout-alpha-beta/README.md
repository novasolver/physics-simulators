# 雪崩 走出距離 α-β モデル シミュレーター

Lied-Bakkehøi (1980) の統計回帰式 α = 0.96β − 1.4° を用いて、走路長・高低差・β 角・雪質から雪崩の最遠到達点（α 点）と最大速度・衝撃圧を即時計算します。ハザードマップ作成・建物配置検討・防護施設設計の第一次スクリーニングに使えるツールです。

**Category:** 雪崩・山岳災害

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/snow-avalanche-runout-alpha-beta.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/snow-avalanche-runout-alpha-beta.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/snow-avalanche-runout-alpha-beta.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/snow-avalanche-runout-alpha-beta
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
