# 垂直衝撃波関係式 シミュレーター — 圧縮性流れ

垂直衝撃波関係式シミュレーターは、上流マッハ数 M_1・比熱比 γ・上流静温 T_1・上流静圧 P_1 から、ランキン・ユゴニオ関係式で下流の M_2・P_2/P_1・T_2/T_1・密度比 ρ_2/ρ_1 をリアルタイム計算します。圧縮性流れの不連続を直感的に学べる教育用ツールです。

**Category:** 圧縮性流体シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/normal-shock-relations.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/normal-shock-relations.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/normal-shock-relations.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/normal-shock-relations
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
