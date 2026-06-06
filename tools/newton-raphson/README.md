# ニュートン・ラフソン法 シミュレーター — 非線形方程式の根

f(x)=x³−2x−5 を例に、ニュートン反復 x_{n+1}=x_n−ω·f(x_n)/f'(x_n) の収束過程を接線と誤差曲線でリアルタイム可視化。初期値・許容差・緩和係数を自由に調整できる。

**Category:** 数値解析シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/newton-raphson.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/newton-raphson.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/newton-raphson.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/newton-raphson
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
