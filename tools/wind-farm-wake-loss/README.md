# 風力発電所のウェイク損失シミュレーター

前に立つ風車の「後流（ウェイク）」が、下流の風車の発電量をどれだけ下げるかを調べるツールです。風速・ロータ直径・タービン間隔・推力係数・台数を変えると、Jensen（Park）後流モデルによる速度欠損・配列効率・ウェイク損失がリアルタイムで分かります。

**Category:** 環境工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wind-farm-wake-loss.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wind-farm-wake-loss.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wind-farm-wake-loss.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wind-farm-wake-loss
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
