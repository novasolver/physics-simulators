# ガウス・ザイデル法 シミュレーター — 線形連立方程式の反復解法

3 元連立 1 次方程式 Ax=b をガウス・ザイデル反復で解き、(x, y, z) の収束軌跡と誤差対数減少を可視化。SOR 緩和係数 ω を 0.5〜1.9 で振り、最適 ω の存在を直感的に体感できます。

**Category:** 数値線形代数シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/gauss-seidel.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/gauss-seidel.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/gauss-seidel.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/gauss-seidel
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
