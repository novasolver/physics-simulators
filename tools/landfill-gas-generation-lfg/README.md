# 埋立地ガス LandGEM 発生量予測シミュレーター

米国 EPA の LandGEM (Landfill Gas Emissions Model) v3.02 に基づき、埋立処分場のメタン (CH₄) 発生量を年間 1,000〜100万 Mg の廃棄物量・受入期間・分解定数 k・メタン生成ポテンシャル L₀ から計算。LFG発電と CO₂eq 削減ポテンシャルが分かる無料シミュレーターです。

**Category:** 環境工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/landfill-gas-generation-lfg.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/landfill-gas-generation-lfg.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/landfill-gas-generation-lfg.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/landfill-gas-generation-lfg
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
