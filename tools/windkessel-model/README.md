# ウィンドケッセルモデル（動脈循環）シミュレーター

心臓の拍動を、大動脈の弾性が滑らかな血流に変える仕組みを、2要素ウィンドケッセルモデルで再現するツールです。動脈コンプライアンスや末梢血管抵抗を変えると、動脈圧の波形・時定数・平均動脈圧・脈圧がリアルタイムで分かります。

**Category:** バイオメカニクス

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/windkessel-model.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/windkessel-model.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/windkessel-model.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/windkessel-model
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
