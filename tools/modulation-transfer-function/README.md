# 変調伝達関数（MTF）シミュレーター

レンズが被写体の「コントラスト」をどれだけ忠実に伝えられるかを計算するツールです。空間周波数・絞り・波長・センサ画素ピッチを変えると、回折限界の変調伝達関数（MTF）・回折カットオフ周波数・ナイキスト周波数でのコントラスト伝達率がリアルタイムで分かり、レンズの解像力を客観的に評価できます。

**Category:** 光学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/modulation-transfer-function.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/modulation-transfer-function.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/modulation-transfer-function.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/modulation-transfer-function
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
