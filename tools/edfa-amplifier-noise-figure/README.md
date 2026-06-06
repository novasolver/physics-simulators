# EDFA エルビウム添加ファイバ増幅器シミュレーター

海底ケーブルや長距離 WDM 通信を支えるエルビウム添加光ファイバ増幅器（EDFA）の設計ツールです。980 nm ポンプ電力・信号波長・入力レベル・EDF 長・段構成を変えながら、小信号利得・出力電力・ノイズ指数 NF・OSNR・飽和出力をリアルタイムに確認できます。

**Category:** 光通信・WDM

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/edfa-amplifier-noise-figure.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/edfa-amplifier-noise-figure.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/edfa-amplifier-noise-figure.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/edfa-amplifier-noise-figure
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
