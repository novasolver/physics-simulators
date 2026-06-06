# マッハ円錐 シミュレーター — 超音速飛行のソニックブーム

超音速 (M>1) で飛行する物体が引きずる円錐状の衝撃波面と、その地表到達によって生じるソニックブームを可視化します。マッハ数・音速・飛行高度・観測者位置を変えて、マッハ角 μ = arcsin(1/M)、円錐到達距離、時間遅延をリアルタイムに計算。亜音速・遷音速・超音速の波面パターンの違いを直観的に体感し、SR-71 やコンコルドが残した地表ブーム軌跡の幾何学を学べます。

**Category:** 圧縮性流体シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/mach-cone.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/mach-cone.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/mach-cone.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/mach-cone
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
