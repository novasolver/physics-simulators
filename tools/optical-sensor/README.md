# 光センサー・フォトディテクター設計シミュレーター

光センサー・フォトディテクターの応答度、雑音等価電力(NEP)、比検出率(D*)、SNRをリアルタイムで計算・可視化する無料オンラインツールです。設計パラメータを変更しながら、ショット雑音や熱雑音の影響をシミュレーション。光学システムの最適化に役立つ直感的な計算機です。

**Category:** 電磁気・光学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/optical-sensor.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/optical-sensor.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/optical-sensor.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/optical-sensor
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
