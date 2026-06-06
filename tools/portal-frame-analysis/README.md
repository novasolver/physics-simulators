# ポータルフレーム解析（ポータル法）シミュレーター

水平荷重を受ける単スパン・単層の剛接ラーメン（ポータルフレーム）を、近似解法のポータル法で解くツールです。柱高さ・梁スパン・水平荷重・曲げ剛性を変えると、柱のせん断力・曲げモーメント・軸力、梁端モーメント、層間変位がリアルタイムで分かります。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/portal-frame-analysis.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/portal-frame-analysis.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/portal-frame-analysis.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/portal-frame-analysis
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
