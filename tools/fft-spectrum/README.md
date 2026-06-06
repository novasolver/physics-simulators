# FFTスペクトル解析シミュレーター

最大5つの正弦波成分を合成してFFTスペクトルを可視化。窓関数（Hanning/矩形/Hamming）・SNR・サンプリング周波数・FFT点数を調整し、スペクトルリーク・THD・周波数分解能をリアルタイム解析。振動解析・騒音計測のCAE実務に直結。

**Category:** 振動・波動

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/fft-spectrum.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/fft-spectrum.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/fft-spectrum.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/fft-spectrum
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
