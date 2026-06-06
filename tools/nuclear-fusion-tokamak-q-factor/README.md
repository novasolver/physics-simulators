# 核融合 トカマク Q値シミュレーター

D-T 核融合反応 (D+T→He-4+n+17.6 MeV) を磁場で閉じ込めるトカマク炉の Q 値・Lawson 三重積・IPB98 閉じ込め時間をリアルタイムに計算します。ITER 設計値（R=6.2m, a=2.0m, B=5.3T, T=15keV）で Q=10 / 点火条件を満たす感覚を体感でき、DEMO 商用炉の設計トレードオフを直感的に学べます。

**Category:** 核融合・プラズマ物理

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/nuclear-fusion-tokamak-q-factor.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/nuclear-fusion-tokamak-q-factor.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/nuclear-fusion-tokamak-q-factor.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/nuclear-fusion-tokamak-q-factor
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
