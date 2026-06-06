# レイリー流れ（加熱付管路）シミュレーター

一定断面の管路に熱を加える「レイリー流れ」のシミュレーター。入口マッハ数・温度・圧力・比熱比・加熱量から、出口マッハ数・全温・熱閉塞限界（最大加熱量）を二分法で計算。ジェットエンジン燃焼器の設計や圧縮性流体の学習に最適な無料ツールです。

**Category:** 圧縮性流体

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rayleigh-flow-duct.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rayleigh-flow-duct.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rayleigh-flow-duct.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rayleigh-flow-duct
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
