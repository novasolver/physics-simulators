# ワイヤレス電力伝送シミュレーター

2つのコイルの間に生じる磁界を使って、配線なしで空隙を越えて電力を送るワイヤレス電力伝送（WPT）を設計するツールです。コイル間距離・半径・周波数・Q値を変えると、結合係数 k と性能指数 kQ、そして実際の伝送効率がリアルタイムで分かります。

**Category:** 電気工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wireless-power-transfer.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wireless-power-transfer.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wireless-power-transfer.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wireless-power-transfer
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
