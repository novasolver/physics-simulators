# 配管の副損失（局部損失）シミュレーター

バルブ・エルボ・ティー・急縮小など「配管の形が変わる箇所」で局所的に生じる副損失を、K係数法でリアルタイム計算するツールです。流速・配管径・ΣK・直管長さを変えると、副損失と直管摩擦損失の寄与率が一目で分かり、ポンプ動力を抑える配管設計の判断に使えます。

**Category:** 流体工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/minor-loss-fittings.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/minor-loss-fittings.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/minor-loss-fittings.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/minor-loss-fittings
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
