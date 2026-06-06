# 抗菌薬 PK/PD・MIC・AUC/MIC シミュレーター

投与量・投与間隔・半減期・分布容積・MIC を入力すると、定常 Cmax・Cmin・24h AUC と PK/PD 指標（%T>MIC、Cmax/MIC、AUC/MIC）をリアルタイム計算し、β-ラクタム／AG／FQ／Vancomycin／Linezolid の目標達成可否を判定します。

**Category:** 感染症・PK/PD

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/antibiotic-mic-pk-pd-auc.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/antibiotic-mic-pk-pd-auc.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/antibiotic-mic-pk-pd-auc.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/antibiotic-mic-pk-pd-auc
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
