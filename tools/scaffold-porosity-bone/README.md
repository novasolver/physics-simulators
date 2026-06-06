# 骨再生スキャフォルド 多孔度・力学設計シミュレーター

骨組織工学で使われる多孔質スキャフォルド（足場材料）を設計するツールです。素材・多孔度・孔径を変えると、Gibson-Ashby モデルによる有効弾性係数・有効強度、Kozeny-Carman 式による透水係数、細胞遊走・血管新生の指数がリアルタイムで分かり、Stress shielding を避けつつ細胞侵入に最適な構造を探せます。

**Category:** 再生医療・バイオ材料

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/scaffold-porosity-bone.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/scaffold-porosity-bone.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/scaffold-porosity-bone.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/scaffold-porosity-bone
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
