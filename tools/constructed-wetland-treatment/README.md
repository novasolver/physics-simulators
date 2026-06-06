# 人工湿地（Constructed Wetland）排水処理シミュレーター

植物・土壌・微生物による自然浄化機能を活用した「人工湿地」での排水処理を設計するツールです。流量・流入水質・湿地タイプ・温度を変えると、Kadlec-Knight の k-C* モデルに基づく必要面積・HRT・除去率がリアルタイムで分かり、低コストなグリーンインフラを設計できます。

**Category:** 水処理・グリーンインフラ

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/constructed-wetland-treatment.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/constructed-wetland-treatment.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/constructed-wetland-treatment.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/constructed-wetland-treatment
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
