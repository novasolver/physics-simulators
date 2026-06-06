# ポリトロープ変化シミュレーター

気体が P·Vⁿ=一定 の法則に沿って状態を変える「ポリトロープ変化」を可視化するツールです。ポリトロープ指数 n をスライダーで動かすと、定圧・等温・断熱・定容の4つの理想過程が1つのモデルで連続的に切り替わり、最終圧力・温度比・仕事・熱量・内部エネルギー変化がリアルタイムで分かります。

**Category:** 熱力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/polytropic-process.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/polytropic-process.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/polytropic-process.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/polytropic-process
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
