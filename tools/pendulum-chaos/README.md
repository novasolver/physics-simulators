# 二重振り子カオスシミュレーター

二重振り子カオスシミュレーターで運動方程式を Runge-Kutta 4 次法によりリアルタイム積分。初期角度を 0.001° ずらした 2 軌道を同時可視化し、バタフライ効果を直感的に体験できます。

**Category:** 力学・カオス

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pendulum-chaos.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pendulum-chaos.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pendulum-chaos.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pendulum-chaos
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
