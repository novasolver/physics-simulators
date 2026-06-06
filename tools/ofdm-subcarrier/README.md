# OFDM サブキャリア シミュレーター

WiFi・4G LTE・5G が共通して使う変調方式 OFDM（直交周波数分割多重）の物理層を体感するツールです。サブキャリア数・帯域幅・サイクリックプレフィックス長・変調方式を変えると、サブキャリア間隔・シンボル長・CPオーバーヘッド・データレートがリアルタイムで分かります。

**Category:** 電気・通信

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ofdm-subcarrier.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ofdm-subcarrier.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ofdm-subcarrier.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ofdm-subcarrier
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
