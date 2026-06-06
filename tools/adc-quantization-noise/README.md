# ADCの量子化ノイズと SNR シミュレーター

A/D 変換器の「連続な電圧を 2^N 段の符号にまるめる」ときに発生する量子化ノイズと SNR を計算するツールです。ビット数・フルスケール電圧・信号振幅・サンプリング周波数を変えると、量子化ステップ・ノイズ実効値・フルスケール SNR (6.02N+1.76 dB)・信号 SNR・オーバーサンプリングゲイン・ENOB がリアルタイムで更新されます。

**Category:** 信号処理

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/adc-quantization-noise.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/adc-quantization-noise.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/adc-quantization-noise.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/adc-quantization-noise
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
