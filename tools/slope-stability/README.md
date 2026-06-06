# 斜面安定解析・安全率計算

簡易ビショップ法による斜面安定解析ツール。斜面形状・土質定数・地下水位を設定し、円弧すべり面とスライスを可視化しながら安全率をリアルタイム計算。間隙水圧の考慮と厳密な収束判定（例：$|FS_{i+1}- FS_i| \lt 10^{-5}$）により、信頼性の高い解析を実現します。

**Category:** 地盤工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/slope-stability.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/slope-stability.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/slope-stability.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/slope-stability
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
