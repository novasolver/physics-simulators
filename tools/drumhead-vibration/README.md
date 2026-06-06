# 円形膜の振動 シミュレーター — Bessel モードと太鼓の音

半径 R、張力 T、面密度 ρ_s の円形膜（太鼓）の振動モードを Bessel 関数の零点 α_mn から計算し、固有振動数 f_mn と二次元変位パターンを可視化します。スライダーでチューニングを変えて非整数倍音の聞こえ方を直感的に理解できます。

**Category:** 振動・波動シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/drumhead-vibration.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/drumhead-vibration.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/drumhead-vibration.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/drumhead-vibration
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
