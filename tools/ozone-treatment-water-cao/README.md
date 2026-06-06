# 上水オゾン処理シミュレーター — AOP・ブロメート・CAO接触槽

上水・再生水のオゾン (O₃) 処理を、CT 値・ブロメート (BrO₃⁻) 副生成・DOC 除去率・CAO 向流接触槽容積で同時に評価できるツールです。原水流量・投入量・pH・水温・臭素濃度を変えると、WHO/EU 飲料水基準 10 μg/L の超過リスクと発生器電力 (12 kWh/kg-O₃) がリアルタイムで分かります。

**Category:** 上水道・高度処理

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ozone-treatment-water-cao.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ozone-treatment-water-cao.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ozone-treatment-water-cao.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ozone-treatment-water-cao
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
