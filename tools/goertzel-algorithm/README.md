# Goertzel アルゴリズム シミュレーター — DTMF 単一周波数検出

Goertzel アルゴリズムで DTMF 16 キーを検出するシミュレーター。二次 IIR フィルタにより 8 つの DFT bin を O(N) で計算し、行・列の最強周波数からキーを判定。FFT より軽量な組込み向け単一周波数検出を直感的に学べます。

**Category:** 信号処理シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/goertzel-algorithm.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/goertzel-algorithm.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/goertzel-algorithm.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/goertzel-algorithm
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
