# バイオ医薬 攪拌槽バイオリアクター 混合時間設計

モノクローナル抗体（mAb）生産に使う攪拌槽バイオリアクターの運転条件を設計するツールです。スケール・翼径・回転数・翼形状・粘度・通気量を変えると、混合時間・kLa（酸素移動）・単位容積動力・翼端せん断がリアルタイムに更新され、細胞を殺さずに pH と DO を均一に保てる条件を探せます。

**Category:** バイオ医薬・反応器

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/biopharma-bioreactor-mixing-time.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/biopharma-bioreactor-mixing-time.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/biopharma-bioreactor-mixing-time.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/biopharma-bioreactor-mixing-time
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
