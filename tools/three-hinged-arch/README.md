# 三ヒンジアーチ シミュレーター

放物線形の三ヒンジアーチに等分布荷重とクラウン集中荷重をかけ、支点に生じる鉛直反力と水平推力を調べるツールです。スパン・ライズ・荷重を変えると、アーチが曲げではなく圧縮で荷重を支える仕組みと、支点を外へ押す推力の大きさがリアルタイムで分かります。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/three-hinged-arch.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/three-hinged-arch.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/three-hinged-arch.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/three-hinged-arch
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
