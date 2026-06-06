# 2D過渡熱伝導シミュレーター

$\partial T / \partial t = \alpha \nabla^2 T$ を有限差分法でリアルタイム計算。境界条件・内部熱源・熱拡散率を自在に設定し、温度分布の時間変化をCanvasアニメーションで確認できます。

**Category:** 熱解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/heat-conduction-transient.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/heat-conduction-transient.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/heat-conduction-transient.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/heat-conduction-transient
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
