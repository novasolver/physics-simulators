# 応力拡大係数 シミュレーター — 線形破壊力学

モードI応力拡大係数 K_I=Yσ√(πa) をリアルタイム計算。形状因子・名目応力・亀裂長さ・破壊靭性をスライダーで操作して、安全係数・許容亀裂長さ・破壊伝播応力を亀裂模式図とK_I-a線図で可視化します。

**Category:** 破壊力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/stress-intensity-factor.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/stress-intensity-factor.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/stress-intensity-factor.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/stress-intensity-factor
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
