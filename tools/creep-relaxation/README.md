# クリープ・応力緩和シミュレーター

Norton則 ε̇=Aσⁿexp(-Q/RT) によるクリープひずみ・応力緩和をリアルタイム計算。316SS・IN718プリセットを切り替え、Arrhenius温度補正による温度依存曲線を可視化します。

**Category:** 解析ツール

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/creep-relaxation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/creep-relaxation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/creep-relaxation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/creep-relaxation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
