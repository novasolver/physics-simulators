# 人工衛星 軌道運用シミュレーター — RAAN/カバレッジ/日食

衛星運用エンジニア向けに、高度 h・傾斜角 i・RAAN を操作してカバレッジ半径と日食割合を試算できる運用設計版です。LEO/GEO 評価、地上局アクセス検討、電力収支の前段に。基礎概念は『軌道力学 基礎シミュレーター』、電力収支は『衛星電力バジェット』、熱設計は『衛星熱制御』を併用してください。

**Category:** 宇宙工学・軌道力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/satellite-orbit.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/satellite-orbit.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/satellite-orbit.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/satellite-orbit
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
