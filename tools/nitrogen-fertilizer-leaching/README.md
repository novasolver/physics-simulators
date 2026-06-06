# 窒素肥料の地下水流出シミュレーター

施肥した窒素のうち、作物に吸われる分・大気に揮散する分・脱窒で失われる分・地下水へ流れ出す分を試算します。土壌種別と降水量を変えると、硝酸態窒素(NO₃⁻)の地下水濃度が WHO 飲料水基準 50 mg/L を超えるかどうかを確認でき、施肥最適化と環境影響の両立を考えるための入門ツールです。

**Category:** 農業・環境工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/nitrogen-fertilizer-leaching.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/nitrogen-fertilizer-leaching.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/nitrogen-fertilizer-leaching.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/nitrogen-fertilizer-leaching
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
