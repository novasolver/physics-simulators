# ロボット経路計画・ポテンシャル場法シミュレーター

ロボットの経路計画をポテンシャル場法でシミュレーション。目標への引力と障害物からの斥力を合成した場で、点質量ロボットの経路をリアルタイム計算します。ポテンシャル分布のカラーマップ表示、局所極小問題の検出機能、簡易RRTとの比較機能を備え、アルゴリズムの理解と評価を支援します。

**Category:** 解析ツール

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/path-planning.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/path-planning.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/path-planning.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/path-planning
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
