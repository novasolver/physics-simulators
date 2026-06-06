# ガウス・プルーム シミュレーター — 大気拡散モデル

点源から放出される汚染物質が風下にどう広がるかを、ガウス・プルームモデル（Pasquill 安定度 Dクラス）で計算します。排出量・風速・排気塔高さ・観測距離を動かすと、地表中心濃度・拡散係数σy・σzが即時更新されます。

**Category:** 環境工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/gaussian-plume.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/gaussian-plume.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/gaussian-plume.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/gaussian-plume
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
