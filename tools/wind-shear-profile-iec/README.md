# 風速プロファイル IEC 61400 シミュレーター

風力タービンの大気境界層風速プロファイルをべき乗則 V=V_ref(z/z_ref)^α と対数則で計算。IEC 61400 クラス I/II/III/IV、地表面粗度、ハブ高、ロータ径から鉛直シア、等価風速、発電出力までを可視化する無料シミュレーター。

**Category:** 風力発電・大気境界層

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wind-shear-profile-iec.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wind-shear-profile-iec.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wind-shear-profile-iec.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wind-shear-profile-iec
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
