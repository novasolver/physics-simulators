# 太陽輻射圧 SRP シミュレーター — 宇宙機軌道摂動と帆推進

宇宙機に作用する太陽輻射圧 (SRP) を計算するツールです。質量・受光面積・反射率・太陽距離・軌道タイプを変えると、SRP 圧力、力、加速度、β パラメータ、累積 ΔV がリアルタイムで分かり、GEO 静止保持・ラグランジュ点ミッション・ソーラーセイル設計の事前検討に使えます。

**Category:** 宇宙工学・軌道摂動

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/solar-radiation-pressure-srp.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/solar-radiation-pressure-srp.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/solar-radiation-pressure-srp.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/solar-radiation-pressure-srp
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
