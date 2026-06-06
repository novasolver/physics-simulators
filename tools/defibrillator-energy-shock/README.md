# 除細動器のエネルギーシミュレーター — RLC放電と二相性波形

AED や ICD で使われるコンデンサ放電型除細動器の電気特性を計算します。設定エネルギー・蓄電容量・胸部インピーダンス・波形タイプを変えると、ピーク電圧・ピーク電流・RC時定数・パルス幅・配信エネルギーがリアルタイムで分かり、DFT に対する安全余裕を確認できます。

**Category:** 医工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/defibrillator-energy-shock.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/defibrillator-energy-shock.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/defibrillator-energy-shock.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/defibrillator-energy-shock
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
