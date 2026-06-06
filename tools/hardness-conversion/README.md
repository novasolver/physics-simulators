# 硬さ換算シミュレーター — HB ↔ HRC ↔ HV ↔ HK ↔ HS

ブリネル HB を基準に、ビッカース HV・ロックウェル HRC・ヌープ HK・ショア HS・引張強度 σ_B を ASTM E140 / JIS Z 2244 の経験式でリアルタイム換算。鋼材を中心に、材料群と試験荷重ゲージによる補正も同時に可視化します。

**Category:** 材料試験シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/hardness-conversion.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/hardness-conversion.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/hardness-conversion.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/hardness-conversion
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
