# 風車ブレード着氷 出力損失予測

寒冷地の風力発電サイトで起きるブレード着氷の量、空力性能の低下、年間発電損失、防氷対策の効果をリアルタイムで試算するシミュレーターです。LWC・気温・ハブ風速・年間着氷時間と Anti-Icing/De-Icing/熱風など対策の組合せから、年間損失 MWh と損失額 USD を可視化できます。

**Category:** 風力発電・着氷対策

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wind-turbine-icing-energy-loss.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wind-turbine-icing-energy-loss.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wind-turbine-icing-energy-loss.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wind-turbine-icing-energy-loss
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
