# 2次元 定常 熱伝導 FDM シミュレーター — Gauss-Seidel 反復解法

2次元定常熱伝導をFDM有限差分法で解析するシミュレーター。Gauss-Seidel反復解法により境界条件・熱源設定から温度分布を高速計算。

**Category:** 熱解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/heat-conduction-2d.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/heat-conduction-2d.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/heat-conduction-2d.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/heat-conduction-2d
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
