# BMS SOC 推定 — クーロン計数・拡張カルマン

BMS（バッテリーマネジメントシステム）の SOC（残量）推定をクーロン計数法・OCV 法・拡張カルマンフィルタ（EKF）・ハイブリッドで比較。公称容量、初期 SOC、負荷電流、センサ誤差、劣化年数、セル温度、経過時間からドリフト誤差と新 SOC をリアルタイム計算する無料シミュレーターです。

**Category:** BMS・SOC 推定

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/battery-management-soc-coulomb-count.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/battery-management-soc-coulomb-count.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/battery-management-soc-coulomb-count.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/battery-management-soc-coulomb-count
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
