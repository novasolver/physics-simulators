# P-Δ 効果 シミュレーター — 軸荷重による二次効果

両端ピン支持柱に軸荷重 $P$ と中央集中横荷重 $H$ が同時作用するときの P-Δ 効果（二次効果）を実時間に計算します。オイラー座屈荷重 $P_{cr}$、軸荷重比 $r = P/P_{cr}$、増幅係数 $\psi = 1/(1-r)$、増幅後モーメント $M_2 = M_1\psi$ を表示し、柱の変形と発散挙動を可視化。

**Category:** 構造力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/p-delta-effect.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/p-delta-effect.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/p-delta-effect.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/p-delta-effect
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
