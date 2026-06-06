# 半導体ワイヤボンディング プル試験強度シミュレーター

IC ダイから lead frame・PCB へ電気接続するワイヤボンディング（Au/Al/Cu/Pd-Cu 線）のプル試験強度をリアルタイム計算します。ワイヤ材料・径・ループ形状・ボンド条件を変えると、MIL-STD-883 基準に対する品質マージンとループ角度感度がすぐに分かり、信頼性設計の初期検討に使えます。

**Category:** 半導体パッケージング

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wire-bonding-pull-strength.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wire-bonding-pull-strength.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wire-bonding-pull-strength.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wire-bonding-pull-strength
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
