# FFTスペクトル解析ツール

合成波形を入力して FFT（高速フーリエ変換）の周波数スペクトルをリアルタイム可視化。窓関数・エイリアシング・スペクトルリークなどデジタル信号処理の落とし穴を、自分で操作しながら体感できます。

**Category:** 振動・信号処理

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/fft-analyzer.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/fft-analyzer.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/fft-analyzer.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/fft-analyzer
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
