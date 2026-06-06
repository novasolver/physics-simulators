# 混合のエントロピー シミュレーター — 理想気体 3 成分混合

理想気体 3 成分混合のエントロピー ΔS_mix = −nR Σ x_i ln x_i を、全モル数 n、モル分率 x_1, x_2, x_3、温度 T から実時間に計算します。ΔG_mix = −T·ΔS_mix、等量混合の最大エントロピー ΔS_max = nR ln 3、達成比 ΔS/ΔS_max を同時に表示し、3 成分粒子の混合と三角相図でモル分率の効果を可視化します。

**Category:** 統計熱力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/entropy-mixing.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/entropy-mixing.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/entropy-mixing.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/entropy-mixing
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
