# P-デルタ効果（二次応力増幅）シミュレーター

軸圧縮力が水平変位を介して生む「二次モーメント」を可視化するツールです。柱の軸力・水平荷重・高さ・曲げ剛性を変えると、弾性座屈荷重・安定率・増幅係数、そして増幅後の二次たわみと基部モーメントがリアルタイムで分かります。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/p-delta-amplification.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/p-delta-amplification.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/p-delta-amplification.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/p-delta-amplification
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
