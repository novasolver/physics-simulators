# ディーゼルサイクル シミュレーター — 定圧加熱と締切り比

ディーゼル機関の理想サイクル（空気標準ディーゼルサイクル）を可視化するツールです。圧縮比・締切り比・比熱比・吸気条件を変えると、熱効率・各点の温度と圧力・正味仕事・平均有効圧力がリアルタイムで分かり、P-V線図のアニメーションとオットーサイクルとの効率比較が見られます。

**Category:** 熱力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/diesel-cycle.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/diesel-cycle.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/diesel-cycle.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/diesel-cycle
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
