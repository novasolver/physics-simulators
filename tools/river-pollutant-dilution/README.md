# 河川における汚染物質の希釈シミュレーター

下水処理水や工場排水が河川に放流されると、河川がそれを希釈します。河川流量・排出流量・排出濃度を変えると、物質収支（マスバランス）から求まる完全混合後の下流濃度・希釈倍率・環境基準への適合がリアルタイムで分かります。

**Category:** 環境工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/river-pollutant-dilution.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/river-pollutant-dilution.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/river-pollutant-dilution.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/river-pollutant-dilution
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
