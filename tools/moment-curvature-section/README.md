# モーメント-曲率関係シミュレーター

矩形断面の梁が曲げを受けたときの「モーメント-曲率（M-φ）関係」を計算するツールです。断面寸法・降伏応力・曲率比を変えると、降伏モーメント・全塑性モーメント・形状係数、そして断面内の応力分布がリアルタイムで分かります。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/moment-curvature-section.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/moment-curvature-section.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/moment-curvature-section.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/moment-curvature-section
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
