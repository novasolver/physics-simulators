# テイラーの工具寿命方程式シミュレーター

切削加工で最も有名な経験則「テイラーの工具寿命方程式 V·Tⁿ=C」を体験できるツールです。切削速度・テイラー指数 n・テイラー定数 C を変えると、工具寿命や1刃あたりの加工個数、速度を上げたときの寿命低下がリアルタイムで分かり、経済的な切削条件を探せます。

**Category:** 加工・製造

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/taylor-tool-life.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/taylor-tool-life.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/taylor-tool-life.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/taylor-tool-life
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
