# 多項式カオス展開 (PCE) UQ シミュレーター — Hermite多項式

ガウス入力 X～N(μ,σ²) に対して Y = a₁X + a₂X² を Hermite 多項式で展開し、出力の平均・分散・Sobol 感度を解析的に求めるツールです。係数 y_k やモンテカルロサンプルとの一致をリアルタイムに確かめながら、不確かさ伝播の感覚を掴めます。

**Category:** 不確かさ定量化 (UQ)

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/polynomial-chaos-expansion.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/polynomial-chaos-expansion.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/polynomial-chaos-expansion.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/polynomial-chaos-expansion
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
