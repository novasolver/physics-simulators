# 割線法 シミュレーター — 導関数なしの根の探索

非線形方程式 f(x)=0 の根を割線法（導関数を必要としない数値解法）で対話的に求める無料ツール。f(x)=x³−2x−5 を例に、2つの初期点 x_0,x_1 と許容差・反復回数を調整して、超線形収束（次数約1.618）の様子と割線の動きをリアルタイムに可視化できる。

**Category:** 数値解析シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/secant-method.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/secant-method.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/secant-method.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/secant-method
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
