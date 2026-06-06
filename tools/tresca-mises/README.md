# トレスカ vs ミーゼス降伏条件 シミュレーター — 主応力空間の比較

3 主応力 (σ1, σ2, σ3) と降伏応力 σy をリアルタイムで変えながら、フォン・ミーゼス（楕円）とトレスカ（正六角形）の 2 つの降伏面を主応力平面 (σ1, σ2) 上に重ね描きし、相当応力と安全係数 SF を比較できる材料降伏シミュレーターです。延性金属の塑性開始点を直感的に把握でき、トレスカが常にミーゼスより安全側（保守的）になることを視覚的に確認できます。

**Category:** 材料降伏シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/tresca-mises.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/tresca-mises.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/tresca-mises.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/tresca-mises
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
