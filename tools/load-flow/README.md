# 電力潮流計算（ガウス・ザイデル法）

3母線モデルにガウス・ザイデル反復法を適用すると、母線電圧 V・位相角 δ・線路潮流 P・Q・系統損失が pu 単位で同時に得られます。収束判定の様子もその場で確認でき、電力系統解析の入門に最適。

**Category:** 解析ツール

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/load-flow.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/load-flow.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/load-flow.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/load-flow
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
