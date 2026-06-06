# 信号・ノイズ・SNR分析ツール

正弦波信号に白色雑音・ピンクノイズ・量子化ノイズを付加し、SNR・ENOB・ノイズフロアをリアルタイム計算する無料CAEツールです。時間波形と周波数スペクトルの両方で信号とノイズを可視化し、SNR=10log10(Ps/Pn)などの理論式と結果を直接比較できます。設計・評価の理解促進に最適です。

**Category:** 信号処理・計測工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/signal-noise.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/signal-noise.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/signal-noise.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/signal-noise
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
