# ヒルベルト変換と解析信号 — 包絡線検出

AM 信号に DFT 経由のヒルベルト変換を適用し、解析信号から瞬時振幅・瞬時位相・瞬時周波数を抽出。キャリア周波数や変調指数を変えて、包絡線検出と復調の原理を直感的に学べます。

**Category:** 信号処理シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/hilbert-envelope.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/hilbert-envelope.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/hilbert-envelope.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/hilbert-envelope
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
