# 燃料電池車 FCV 燃費・航続距離シミュレーター

水素燃料電池車（Toyota Mirai／Hyundai Nexo／Honda CR-V e:FCEV／BMW iX5 Hydrogen 等）の航続距離と H₂ 消費量を設計するツールです。車両質量・空力・タンク容量・燃料電池タイプを変えると、必要電力・燃費・CO₂ 排出量・充填時間がリアルタイムで分かります。

**Category:** 水素モビリティ・FCV

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/hydrogen-fcv-fuel-economy.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/hydrogen-fcv-fuel-economy.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/hydrogen-fcv-fuel-economy.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/hydrogen-fcv-fuel-economy
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
