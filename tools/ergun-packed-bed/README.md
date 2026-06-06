# エルガン式 シミュレーター — 充填層の圧力損失

球形粒子を充填した層を流体が通過する際の単位長さあたり圧力損失 ΔP/L を、エルガン式 ΔP/L = 150μu(1−ε)²/(ε³d_p²) + 1.75ρu²(1−ε)/(ε³d_p) により実時間に計算します。空塔速度 u、粒子径 d_p、空隙率 ε、粘度 μ から ΔP/L、粒子レイノルズ数 Re_p、最小流動化速度 u_mf、層流寄与の割合を表示し、充填層の側面模式図と log-log の ΔP/L − u 曲線で固定床から流動化までの挙動を可視化します。

**Category:** 粉体・流動層シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ergun-packed-bed.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ergun-packed-bed.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ergun-packed-bed.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ergun-packed-bed
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
