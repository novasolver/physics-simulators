# 顕熱比 SHF 計算ツール — 空調負荷バランス

人体・照明・機器・外気導入による顕熱負荷 Q_s と潜熱負荷 Q_L を集計し、顕熱比 SHF=Q_s/Q_t をリアルタイム算出。空気線図上に SHF 線として可視化し、冷却コイル設計の指標として活用できます。

**Category:** 熱流体・空調

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/sensible-latent-heat-ratio.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/sensible-latent-heat-ratio.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/sensible-latent-heat-ratio.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/sensible-latent-heat-ratio
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
