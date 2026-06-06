# スタートラッカ姿勢決定精度シミュレーター

CMOS/CCD で複数の恒星を撮像し、星カタログと照合して 3軸姿勢を arcsec 精度で決定する「スタートラッカ（STR）」のセンサー設計ツール。検出器解像度・視野角・追跡星数・積分時間・宇宙機角速度を変えて、像スメアと総合姿勢精度がどう変わるかをリアルタイムで確認できます。

**Category:** 宇宙工学・姿勢制御

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/star-tracker-pointing-accuracy.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/star-tracker-pointing-accuracy.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/star-tracker-pointing-accuracy.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/star-tracker-pointing-accuracy
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
