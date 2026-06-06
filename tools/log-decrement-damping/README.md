# 対数減衰率による減衰比測定シミュレーター

物体を一度たたいて自由に振動させ、その揺れが収まっていく波形から減衰特性を測るツールです。1回目とn周期後のピーク振幅を入力すると、対数減衰率 δ・減衰比 ζ・Q値がリアルタイムで分かり、減衰の評価ができます。

**Category:** 振動工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/log-decrement-damping.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/log-decrement-damping.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/log-decrement-damping.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/log-decrement-damping
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
