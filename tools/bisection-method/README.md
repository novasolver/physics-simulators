# 二分法 シミュレーター — 区間囲み込みによる根の探索

f(x)=x³−2x−5 を例に、中点 c=(a+b)/2 で区間を半分ずつ縮めていく二分法の収束過程をリアルタイム可視化。初期区間 a, b・許容差・反復回数を自由に調整できる。

**Category:** 数値解析シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/bisection-method.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/bisection-method.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/bisection-method.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/bisection-method
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
