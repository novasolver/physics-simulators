# 原子炉動特性・点炉モデルシミュレーター

原子炉動特性・点炉モデルシミュレーターは、点炉動特性方程式をRK4法で数値積分し、反応度投入やスクラム、6群の遅発中性子の挙動をリアルタイムで可視化します。即発臨界条件（ρ≧β）に基づく警告機能を備え、逆時間方程式（inhour equation）を用いた原子炉動特性の理解を深める教育・研究ツールです。

**Category:** 物理シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/reactor-kinetics.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/reactor-kinetics.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/reactor-kinetics.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/reactor-kinetics
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
