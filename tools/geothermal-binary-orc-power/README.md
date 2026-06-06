# 中低温地熱発電 Binary (ORC) シミュレーター

フラッシュには温度が足りない 100〜200°C の地熱ブラインを、二次流体（R245fa, Isobutane など）に熱交換して動かすバイナリーサイクル（ORC）の設計ツールです。ブライン条件・作動流体・凝縮温度を変えると、抽出熱量・正味出力・年間発電量・LCOE がリアルタイムで更新されます。

**Category:** 地熱発電・再生エネ

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/geothermal-binary-orc-power.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/geothermal-binary-orc-power.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/geothermal-binary-orc-power.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/geothermal-binary-orc-power
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
