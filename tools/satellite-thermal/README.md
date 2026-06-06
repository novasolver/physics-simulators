# 衛星熱制御シミュレーター

衛星熱制御シミュレーターは、太陽フラックス・地球赤外・アルベド・内部発熱を考慮し、熱収支（Q_in = Q_out）から均衡温度を算出。日照時・日陰時の温度変動解析や、放熱板面積のサイジング（A_rad = Q_reject/(εσT_rad^4 - q_abs)）を支援。LEO・GEO・深宇宙ミッションに対応した熱設計ツールです。

**Category:** 熱解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/satellite-thermal.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/satellite-thermal.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/satellite-thermal.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/satellite-thermal
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
