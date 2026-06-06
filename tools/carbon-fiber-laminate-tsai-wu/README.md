# CFRP 積層板 Tsai-Wu 破壊基準シミュレーター

炭素繊維強化プラスチック（CFRP）積層板の Tsai-Wu 破壊基準を、相互作用項 F12 を含めて評価するツールです。繊維系（T800/T1000/M55J/Eガラス）・繊維体積分率・主応力 σ11/σ22/τ12・主層配向を変えると、Tsai-Wu 破壊指標、最大応力指標、強度比 R、安全率が同時に更新されます。

**Category:** 複合材料・構造強度

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/carbon-fiber-laminate-tsai-wu.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/carbon-fiber-laminate-tsai-wu.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/carbon-fiber-laminate-tsai-wu.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/carbon-fiber-laminate-tsai-wu
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
