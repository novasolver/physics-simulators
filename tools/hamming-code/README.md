# ハミング符号シミュレーター

ハミング(7,4)符号で「誤りを検出するだけでなく、どこが間違ったかを突き止めて自動で直す」しくみを体験できるツールです。4つのデータビットから符号語を作り、好きな位置に1ビットの誤りを注入すると、シンドロームが誤り位置を指し示し、訂正される様子がリアルタイムで分かります。

**Category:** 電気・通信

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/hamming-code.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/hamming-code.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/hamming-code.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/hamming-code
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
