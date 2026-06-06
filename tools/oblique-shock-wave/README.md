# 斜め衝撃波 シミュレーター — θ-β-M 関係

斜め衝撃波シミュレーターは、上流マッハ数 M_1・衝撃波角 β・比熱比 γ・上流静圧 P_1 から、θ-β-M 関係で流れ偏向角 θ・下流マッハ数 M_2・下流静圧 P_2・法線成分 M_1n をリアルタイム計算します。楔まわりの斜め衝撃波と弱解・強解の分岐を直感的に学べる教育用ツールです。

**Category:** 圧縮性流体シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/oblique-shock-wave.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/oblique-shock-wave.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/oblique-shock-wave.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/oblique-shock-wave
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
