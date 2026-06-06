# MRI 受信コイル SNR シミュレーター

磁気共鳴画像（MRI）の信号雑音比 SNR、コントラスト雑音比 CNR、取得時間、特殊吸収率 SAR を、静磁場強度・コイル数・ボクセル寸法・繰り返し時間 TR・加算平均回数 NEX・受信帯域・コイル Q 値から計算します。1.5T/3T/7T の画質トレードオフを直感的に把握できます。

**Category:** 医工学・医療画像

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/mri-snr-coil.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/mri-snr-coil.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/mri-snr-coil.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/mri-snr-coil
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
