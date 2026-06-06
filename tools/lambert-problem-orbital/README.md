# ランベルト問題シミュレーター

2点（出発点 r₁ と到達点 r₂）を結ぶ遷移軌道を求める「ランベルト問題」を可視化するツールです。最小エネルギー楕円の遷移時間、Hohmann遷移との比較、各噴射点のΔvと合計Δvがリアルタイムで分かり、LEO→GEOなど軌道遷移の感覚を掴めます。

**Category:** 宇宙工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/lambert-problem-orbital.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/lambert-problem-orbital.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/lambert-problem-orbital.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/lambert-problem-orbital
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
