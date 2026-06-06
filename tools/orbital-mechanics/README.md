# 軌道力学 基礎シミュレーター — LEO/GEO/月/火星プリセット版

半長軸 a・離心率 e・傾斜角 i の 3 軌道要素を変えて、LEO・ISS・GEO・月遷移・火星遷移の楕円軌道を即座にアニメーション化。軌道周期と速度の関係を初学者向けに整理した軌道力学入門シミュレーターです。vis-viva 解析の拡張版は『軌道力学シミュレーター (sim)』、運用設計は『人工衛星軌道シミュレーター』へ。

**Category:** 宇宙工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/orbital-mechanics.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/orbital-mechanics.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/orbital-mechanics.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/orbital-mechanics
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
