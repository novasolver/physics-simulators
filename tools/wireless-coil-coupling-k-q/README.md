# ワイヤレス電力伝送 結合係数 k・Q値シミュレーター

Qi 充電や EV ワイヤレス給電で使われる磁界共鳴方式（Kurs–Soljacic）の 2 コイル結合を設計するツールです。コイル直径・巻数・距離・周波数・Q値を変えると、結合係数 k・kQ 性能指数・Kurs–Soljacic 最大効率がリアルタイムで分かり、目標効率を達成できるリンク設計を探せます。

**Category:** 無線電力伝送・WPT

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wireless-coil-coupling-k-q.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wireless-coil-coupling-k-q.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wireless-coil-coupling-k-q.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wireless-coil-coupling-k-q
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
