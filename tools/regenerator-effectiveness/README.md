# 再生熱交換器（リジェネレータ）効率シミュレーター

蓄熱マトリクスに高温ガスと低温ガスを交互に通して熱を回収する再生熱交換器を評価するツールです。NTU・熱容量流量比・マトリクス熱容量比を変えると、有効度・出口温度・回収熱量がリアルタイムで分かり、回転再生器や蓄熱式熱交換器の性能を見積もれます。

**Category:** 伝熱工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/regenerator-effectiveness.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/regenerator-effectiveness.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/regenerator-effectiveness.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/regenerator-effectiveness
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
