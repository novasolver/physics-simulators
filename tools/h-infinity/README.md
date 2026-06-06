# H∞制御シミュレーター — 混合感度設計とH∞ノルム

プロセス G_p=1/(T_p s+1) に対するPI制御で、感度関数Sと相補感度T、重みW_S・W_Tの混合感度ピーク（H∞ノルム）を可視化。外乱抑圧とノイズ抑圧の設計トレードオフを学べます。

**Category:** 制御工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/h-infinity.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/h-infinity.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/h-infinity.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/h-infinity
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
