# 農業温室エネルギー収支シミュレーター

農業用温室（園芸ハウス）の熱収支を組み立てるツールです。床面積・被覆材・外気温・日射・換気回数・作物蒸散を変えると、日射ゲイン・伝導損失・換気損失・蒸散冷却と、正味の暖冷房負荷・年間暖房エネルギーがリアルタイムで分かります。

**Category:** 農業工学・温室設計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/greenhouse-energy-balance.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/greenhouse-energy-balance.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/greenhouse-energy-balance.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/greenhouse-energy-balance
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
