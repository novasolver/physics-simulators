# SFD・BMD シミュレーター — 単純支持梁の複合荷重

SFD・BMD シミュレーターは、両端単純支持梁に集中荷重・等分布荷重を組み合わせて作用させたときのせん断力図と曲げモーメント図をリアルタイム計算します。反力 R_A, R_B、最大曲げモーメントとその発生位置まで自動で求める材料力学・構造解析ツールです。

**Category:** 構造解析シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/shear-and-moment-diagram.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/shear-and-moment-diagram.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/shear-and-moment-diagram.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/shear-and-moment-diagram
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
