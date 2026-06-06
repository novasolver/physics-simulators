# 全固体電池 エネルギー密度シミュレーター

次世代EVと民生機器のキー技術である全固体電池（SSB）の設計ツール。正極材料・Li金属/Si-C負極・硫化物/酸化物/ポリマー電解質を選び、各層の厚みとローディングを変えると、質量エネルギー密度（Wh/kg）と体積エネルギー密度（Wh/L）が Li-ion 基準（250 Wh/kg・600 Wh/L）と比較しながらリアルタイムで分かります。

**Category:** エネルギー貯蔵・次世代電池

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/solid-state-battery-energy-density.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/solid-state-battery-energy-density.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/solid-state-battery-energy-density.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/solid-state-battery-energy-density
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
