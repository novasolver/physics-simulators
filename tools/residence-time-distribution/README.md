# 滞留時間分布（RTD）シミュレーター

流れ反応器に入った流体が「どれだけの時間、中にとどまるか」を表す滞留時間分布 E(t) を計算するツールです。理想CSTR・PFR・槽列モデル・層流反応器を切り替え、平均滞留時間や分散、等価槽数、一次反応の転化率がリアルタイムで分かります。

**Category:** 反応工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/residence-time-distribution.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/residence-time-distribution.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/residence-time-distribution.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/residence-time-distribution
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
