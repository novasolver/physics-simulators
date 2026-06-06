# 電力系統 周波数垂下制御シミュレーター — Primary Response

電力系統で負荷が急変したとき、各発電機の垂下制御（Droop）と系統慣性 H が周波数をどう支えるかを計算します。系統種別・定格出力・垂下率 R・負荷外乱・慣性・AGC ゲインを動かして、Δf・RoCoF・nadir・回復時間が UCTE 規定（±0.2Hz 定常／±0.8Hz nadir）に収まるかを直感的に確かめられます。

**Category:** 電力系統・周波数制御

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/smart-grid-frequency-droop-control.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/smart-grid-frequency-droop-control.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/smart-grid-frequency-droop-control.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/smart-grid-frequency-droop-control
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
