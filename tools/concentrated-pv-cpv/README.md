# 集光型太陽光発電 CPV シミュレーター

Fresnelレンズで太陽光を数百〜2000倍に集光し、III-V三接合セル（InGaP/GaAs/Ge）で40%超の発電効率を狙うCPVモジュールの設計ツール。集光倍率・DNI・セル温度を変えると、モジュール効率と廃熱フラックスがリアルタイムで分かり、必要な冷却方式を判定します。

**Category:** 太陽光・高効率発電

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/concentrated-pv-cpv.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/concentrated-pv-cpv.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/concentrated-pv-cpv.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/concentrated-pv-cpv
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
