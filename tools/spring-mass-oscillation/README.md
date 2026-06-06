# ばね質量系シミュレーター

ばね定数・質量・減衰係数を自由に調整し、1自由度振動系の過減衰・臨界減衰・不足減衰の違いをリアルタイムアニメーションで視覚的に学べます。強制加振にも対応し、振動の数式と動きを直接結び付け。高精度なRunge-Kutta 4次法でシミュレーションしています。

**Category:** 振動・波動

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/spring-mass-oscillation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/spring-mass-oscillation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/spring-mass-oscillation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/spring-mass-oscillation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
