# 準モンテカルロ法シミュレーター — Sobol列

Sobol列やHalton列といった「低食い違い量列」で数値積分を行うツールです。サンプル点数・点列の種類・被積分関数を変えると、決定的な点列が単位正方形を均等に埋め、疑似乱数より誤差が速く収束する様子をリアルタイムで観察できます。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/quasi-monte-carlo-sobol.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/quasi-monte-carlo-sobol.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/quasi-monte-carlo-sobol.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/quasi-monte-carlo-sobol
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
