# ラーソン・ミラーパラメータ シミュレーター — クリープ寿命予測

LMP = T(C + log10 tr)/1000 をリアルタイム計算し、高温材料のクリープ破断寿命を予測。応力 σ、温度 T、C 定数、b から tr・年寿命・σ100k を算出し、マスターカーブを可視化します。

**Category:** 材料強度シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/larson-miller.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/larson-miller.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/larson-miller.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/larson-miller
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
