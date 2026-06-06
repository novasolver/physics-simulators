# 記述関数法シミュレーター — 非線形制御

リレー・飽和・不感帯などの非線形要素を振幅依存の等価ゲイン N(A) に置き換え、線形部の軌跡 L(jω) と臨界曲線 −1/N(A) の交点からリミットサイクル（自励振動）の振幅・周波数を予測するツールです。非線形要素やパラメータを変えると、振動の発生有無がリアルタイムで分かります。

**Category:** 制御工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/describing-function.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/describing-function.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/describing-function.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/describing-function
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
