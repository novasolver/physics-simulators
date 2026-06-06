# ナイキスト・サンプリング定理 シミュレーター — 折り返し（エイリアシング）

信号周波数 f、サンプリング周波数 f_s、観測時間、量子化ビット数 N をスライダーで調整し、ナイキスト周波数 f_s/2、折り返しエイリアス周波数 f_alias、量子化 SNR=6.02N+1.76 dB をリアルタイム計算します。連続正弦波・サンプル点・再構成波の同時表示と f-f_alias 折り返し図で、A/D 変換・振動計測・モーダル解析でのアンチエイリアシング設計を直感的に学べます。

**Category:** 信号処理シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/nyquist-sampling.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/nyquist-sampling.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/nyquist-sampling.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/nyquist-sampling
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
