# 活性汚泥プロセス (CSTR・Monod型) シミュレーター

下水処理の主役・活性汚泥法を Monod 式と完全混合槽（CSTR）の定常質量バランスで計算します。流入BOD・反応槽体積・SRT などをスライダーで動かすと、流出BOD・MLSS・余剰汚泥量・F/M比がリアルタイムに更新され、曝気槽の設計と運転条件を直感的につかめます。

**Category:** 環境工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/activated-sludge-modeling.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/activated-sludge-modeling.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/activated-sludge-modeling.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/activated-sludge-modeling
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
