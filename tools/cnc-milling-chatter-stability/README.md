# CNC ミリング再生ビビり安定限界シミュレーター

エンドミル加工で発生する再生ビビりの安定限界を、Tlusty/Altintas の解析モデルで計算します。主軸回転数・刃数・工具固有振動数・動的剛性を変えて安定ローブ線図 (Stability Lobe Diagram) を描き、最大の軸切込みが取れる sweet spot を探す加工計画ツールです。

**Category:** 機械加工・動的安定性

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/cnc-milling-chatter-stability.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/cnc-milling-chatter-stability.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/cnc-milling-chatter-stability.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/cnc-milling-chatter-stability
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
