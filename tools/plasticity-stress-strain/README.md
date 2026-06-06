# 弾塑性応力ひずみ関係シミュレーター

弾塑性応力ひずみ関係を双線形・Ramberg-Osgood・べき乗則の3モデルで比較・シミュレーション。S45C、SS400、Al6061などの材料の応力ひずみ曲線をリアルタイム計算し、除荷サイクルも可視化。CAE材料モデリングを支援するNovaSolverのツールです。

**Category:** 構造解析 / 材料モデル

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/plasticity-stress-strain.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/plasticity-stress-strain.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/plasticity-stress-strain.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/plasticity-stress-strain
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
