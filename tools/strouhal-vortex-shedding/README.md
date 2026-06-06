# ストローハル数・渦放出周波数シミュレーター — カルマン渦と共振

円柱周りの流れに現れるカルマン渦の放出周波数を、流速・直径・動粘度から計算。Reynolds 数領域に応じた St を自動で切り替え、構造物固有振動数とのロックオン共振リスクを診断します。

**Category:** 流体力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/strouhal-vortex-shedding.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/strouhal-vortex-shedding.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/strouhal-vortex-shedding.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/strouhal-vortex-shedding
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
