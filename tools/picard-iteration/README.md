# ピカール反復（不動点反復）シミュレーター

ピカール反復（不動点反復）シミュレーター: 方程式を x = g(x) の形にして x_{n+1} = g(x_n) をくり返す「不動点反復」を可視化するツールです。写像 g(x)・初期値・反復回数を変えると、くもの巣図（コブウェブ）が収束へ巻き込まれたり発散したりする様子と、収束条件 |g'(x*)|<1 の意…'(x*)|<1 の収束条件と収束速度を直感的に学べます。発散例も体験できます。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/picard-iteration.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/picard-iteration.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/picard-iteration.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/picard-iteration
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
