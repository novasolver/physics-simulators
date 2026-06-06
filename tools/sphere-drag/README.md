# 球の抗力係数シミュレーター — C_D vs Reynolds 数

球の抗力係数シミュレーターは Reynolds 数に応じて C_D を Stokes・中間・Newton・超臨界の各域で計算し、終端速度も同時に求めます。流速・直径・流体物性を変えて、ドラッグクライシスまで含む球の抗力特性を直感的に学べます。

**Category:** 流体力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/sphere-drag.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/sphere-drag.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/sphere-drag.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/sphere-drag
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
