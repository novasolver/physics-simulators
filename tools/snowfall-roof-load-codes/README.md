# 屋根積雪荷重 シミュレーター — 建築基準法・Eurocode 1・ASCE 7

屋根に積もる雪の設計用荷重を、日本 建築基準法・Eurocode 1（EN 1991-1-3）・米国 ASCE 7-22・カナダ NBCC の4規格で計算します。地域・屋根形状・勾配・熱条件・曝露を変えると、単位荷重 S_r、総荷重、偏荷重（drift）、等価雪深が同時に更新されます。

**Category:** 建築構造・気象荷重

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/snowfall-roof-load-codes.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/snowfall-roof-load-codes.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/snowfall-roof-load-codes.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/snowfall-roof-load-codes
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
