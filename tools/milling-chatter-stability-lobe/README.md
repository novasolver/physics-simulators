# フライス加工 チャタ安定ローブ シミュレーター

フライス加工の宿命「チャタ振動 (びびり)」を Altintas-Budak の安定ローブ理論で予測します。工具刃数・主軸回転数・モード剛性・固有振動数を変えると、軸方向限界切込み b_lim と安定 RPM 帯、MRR が実時間で更新され、チャタを避けつつ削り量を最大化するレシピを探せます。

**Category:** 切削加工・チャタ振動

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/milling-chatter-stability-lobe.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/milling-chatter-stability-lobe.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/milling-chatter-stability-lobe.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/milling-chatter-stability-lobe
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
