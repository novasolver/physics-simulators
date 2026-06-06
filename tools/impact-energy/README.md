# シャルピー衝撃試験シミュレーター

シャルピー衝撃試験シミュレーターは、CAEエンジニアが材料の衝撃特性を効率的に評価するためのツールです。CVN吸収エネルギーの計算から、Barsom-Rolfe相関式による破壊靭性K_Icの推定、tanh曲線を用いた脆性遷移温度（DBTT）の予測までを支援。材料選定や安全性評価の設計プロセスを強力にサポートします。

**Category:** 材料試験・破壊力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/impact-energy.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/impact-energy.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/impact-energy.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/impact-energy
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
