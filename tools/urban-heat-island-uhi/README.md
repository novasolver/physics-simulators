# 都市ヒートアイランド (UHI) 強度シミュレーター

都市人口・アルベド・不透水率・緑地率・風速から、Oke (1973) の経験式に補正項を加えた都市ヒートアイランド (UHI) 強度 ΔT をリアルタイム計算。クールルーフ・緑地導入・透水性舗装の効果を定量評価できる無料の都市気候シミュレーターです。

**Category:** 環境工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/urban-heat-island-uhi.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/urban-heat-island-uhi.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/urban-heat-island-uhi.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/urban-heat-island-uhi
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
