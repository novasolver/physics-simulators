# 常微分方程式 数値解法比較

Euler法・ホイン法(RK2)・Runge-Kutta4次法(RK4)を並列比較。指数減衰・ロジスティック成長・調和振動子・Van der Pol方程式を厳密解と重ね合わせて誤差を可視化。ステップ幅hの影響を直感的に理解できる無料Webツール。

**Category:** 数理・統計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/numerical-ode.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/numerical-ode.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/numerical-ode.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/numerical-ode
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
