# 非対称曲げシミュレーター

矩形断面の梁に、断面の主軸からずれた角度で曲げモーメントを与えるツールです。荷重作用角を変えると、モーメントが強軸・弱軸の成分に分かれ、隅角部の曲げ応力・中立軸の傾き・たわみの向きがリアルタイムで分かります。梁が荷重と違う方向にたわむ「非対称曲げ」を体感できます。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/unsymmetric-bending.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/unsymmetric-bending.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/unsymmetric-bending.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/unsymmetric-bending
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
