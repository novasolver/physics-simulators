# 圧電素子シミュレーター

圧電素子シミュレーターは、d33/d31圧電定数から電荷感度・共振周波数・電気機械結合係数を自動算出。PZT-4、PZT-5H、PVDFのプリセットに対応し、センサーやアクチュエーターの設計を強力に数値支援します。アクチュエーターの変位（厚み方向）や電荷感度（Sq = d33・Ae）など、重要な設計パラメータを迅速に評価可能です。

**Category:** 電磁気・光学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/piezoelectric.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/piezoelectric.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/piezoelectric.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/piezoelectric
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
