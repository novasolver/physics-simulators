# Sobol 感度指標 (S₁/S_T) シミュレーター

入力の不確かさが出力分散にどう効くかを「主効果」と「相互作用」に分解して見える化する大域感度解析ツールです。解析モデル f = a₁X₁ + a₂X₂ + a₃X₁X₂ で、係数と分散をスライダーで変えながら 1次 Sobol 指標 S_i、全 Sobol 指標 S_Ti、相互作用 S_ij の寄与率をリアルタイムに比較できます。

**Category:** 不確かさ定量化 (UQ)

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/sobol-sensitivity-indices.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/sobol-sensitivity-indices.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/sobol-sensitivity-indices.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/sobol-sensitivity-indices
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
