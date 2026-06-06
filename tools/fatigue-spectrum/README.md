# 変動荷重スペクトル疲労累積損傷計算

S-N曲線とMiner則に基づき、変動振幅荷重下での疲労累積損傷を計算。鋼・アルミ・CFRPの材料パラメータに対応し、Goodman補正で平均応力の影響を考慮。残存寿命と安全率をリアルタイムで算出し、累積損傷度メーター（D=1で破損）で健全性を視覚的に評価します。

**Category:** 破壊力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/fatigue-spectrum.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/fatigue-spectrum.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/fatigue-spectrum.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/fatigue-spectrum
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
