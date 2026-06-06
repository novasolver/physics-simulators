# 有限差分熱伝導シミュレーター

陽解法FDM $T_i^{n+1}= T_i^n + r(T_{i+1}^n - 2T_i^n + T_{i-1}^n)$（$r = \alpha\Delta t/\Delta x^2 \leq 0.5$）による1次元熱伝導をリアルタイムアニメーション。

**Category:** 数値熱解析シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/finite-diff-heat.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/finite-diff-heat.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/finite-diff-heat.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/finite-diff-heat
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
