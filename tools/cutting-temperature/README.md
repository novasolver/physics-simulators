# 切削温度の見積もり（エネルギーバランス）シミュレーター

旋削・フライス加工の刃先で発生する熱量と、切削温度の平均値をエネルギーバランス法で見積もるツールです。切削速度・送り・主分力を変えると、発熱率・温度上昇・工具温度がリアルタイムで分かり、工具溶損や被削材の熱影響を未然に避ける設計ができます。

**Category:** 加工技術

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/cutting-temperature.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/cutting-temperature.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/cutting-temperature.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/cutting-temperature
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
