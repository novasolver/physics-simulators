# 質量分析装置 シミュレーター — 磁場中円運動による質量分離

電荷数 z・質量 m・加速電圧 V・磁束密度 B から、加速後速度 v = √(2qV/m)、円軌道半径 r = mv/(qB)、質量電荷比 m/q、運動エネルギー KE をリアルタイムに計算します。イオン源・加速領域・磁場セクター・検出器の模式図と、m/z に対する半径 r のグラフで、磁場セクター型質量分析の原理を直感的に学べます。

**Category:** 分析機器シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/mass-spectrometer.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/mass-spectrometer.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/mass-spectrometer.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/mass-spectrometer
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
