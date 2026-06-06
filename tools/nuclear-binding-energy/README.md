# 核結合エネルギー計算ツール

原子核の結合エネルギーをベーテ-ヴァイツゼッカーの半経験式でリアルタイム計算する原子核物理シミュレーター。陽子数 Z・中性子数 N を変えて、体積項・表面項・クーロン項・対称項の寄与と BE/A 曲線、核分裂・核融合のエネルギー源を可視化します。

**Category:** 核物理

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/nuclear-binding-energy.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/nuclear-binding-energy.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/nuclear-binding-energy.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/nuclear-binding-energy
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
