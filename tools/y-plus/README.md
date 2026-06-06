# 無次元壁距離 y+ シミュレーター — CFD 境界層解像

壁から第 1 セルまでの無次元距離 $y^+ = y\,u_\tau/\nu$ をリアルタイム計算します。主流速度 $U_\infty$、第 1 セル高さ $y$、動粘性係数 $\nu$、摩擦係数 $c_f$ を変えて、摩擦速度 $u_\tau$、壁面せん断応力 $\tau_w$、適切な乱流モデル領域（粘性底層・バッファ層・対数則層）を即時に判定し、$u^+$ プロットと境界層模式図で可視化します。

**Category:** CFD 基礎シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/y-plus.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/y-plus.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/y-plus.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/y-plus
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
