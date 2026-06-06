# 薄肉断面のねじり（開断面 vs 閉断面）シミュレーター

同じ薄肉の角パイプを「閉断面（無傷の管）」と「開断面（縦にスリットを入れた管）」の2通りで解析するツールです。代表寸法・肉厚・トルクを変えると、ねじり定数・ねじれ角・剛性比がリアルタイムで分かり、なぜ箱形断面がねじりに圧倒的に強いのかを体感できます。

**Category:** 材料力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/warping-torsion-thin-wall.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/warping-torsion-thin-wall.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/warping-torsion-thin-wall.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/warping-torsion-thin-wall
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
