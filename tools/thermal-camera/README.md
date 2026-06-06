# 赤外線サーモグラフィーシミュレーター — 2D熱分布可視化

キャンバスに熱源・冷却板・断熱材を描くだけで、ラプラス方程式をヤコビ反復法で解いて2D定常温度分布を生成。本物のサーモグラフィーのような温度マップで、PCB放熱や壁断熱の感覚を掴めます。

**Category:** 熱解析・サーモグラフィー

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/thermal-camera.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/thermal-camera.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/thermal-camera.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/thermal-camera
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
