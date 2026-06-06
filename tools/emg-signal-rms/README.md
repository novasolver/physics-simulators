# 筋電位 EMG 信号処理シミュレーター

表面筋電位（sEMG）から筋活動と疲労を定量化する信号処理ツールです。筋力レベル・サンプリング周波数・バンドパス・疲労度・電極雑音を変えると、RMS振幅・中央値周波数（MDF）・SNR・MU発火率がリアルタイムで分かります。

**Category:** 医工学・生体信号

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/emg-signal-rms.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/emg-signal-rms.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/emg-signal-rms.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/emg-signal-rms
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
