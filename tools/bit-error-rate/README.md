# ビット誤り率（BER）シミュレーター

AWGN通信路でのビット誤り率（BER）を計算。Eb/N0・変調方式（BPSK/QPSK/16-QAM/64-QAM）・ビットレート・誤り訂正符号化利得を変えて、ウォーターフォール曲線・コンスタレーション・必要Eb/N0をリアルタイムに可視化できる無料シミュレーターです。

**Category:** 電気・通信

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/bit-error-rate.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/bit-error-rate.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/bit-error-rate.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/bit-error-rate
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
