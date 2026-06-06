# PPG信号 & SpO₂ シミュレーター — パルスオキシメトリー原理

指先に当てた赤色・赤外 LED の吸光比から、動脈血酸素飽和度 SpO₂ を推定するパルスオキシメトリーの原理を、PPG 生波形と校正曲線で可視化するツールです。灌流指数・体動アーチファクト・サンプリング周波数が信号品質と測定不確かさにどう効くかをリアルタイムに確認できます。

**Category:** 医工学・生体信号

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/photoplethysmography-ppg.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/photoplethysmography-ppg.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/photoplethysmography-ppg.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/photoplethysmography-ppg
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
