# ΣΔ ADC オーバーサンプリング・ノイズシェーピング SNR シミュレーター

ΣΔ（シグマデルタ）ADC の OSR・変調器次数・量子化器ビット数から、ノイズシェーピング後の SNR と実効ビット数 ENOB、サンプリング周波数、消費電力をリアルタイム計算します。1bit 変調器でも高次フィルタ × 高 OSR で 20 bit 超の分解能が得られる仕組みを直感的に確認できます。

**Category:** ADC・データコンバータ

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/sigma-delta-adc-oversampling.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/sigma-delta-adc-oversampling.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/sigma-delta-adc-oversampling.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/sigma-delta-adc-oversampling
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
