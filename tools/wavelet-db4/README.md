# Daubechies-4 ウェーブレット — 4タップ直交基底・滑らか信号向け

Daubechies-4ウェーブレットシミュレーターは、4タップ直交ウェーブレット（db4）で1D信号を多重解像度分解し、詳細係数の閾値ゼロ化による圧縮挙動と再構成MSEをリアルタイムに可視化します。Haarより滑らかな基底による圧縮性能を学べます。

**Category:** 信号処理シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wavelet-db4.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wavelet-db4.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wavelet-db4.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wavelet-db4
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
