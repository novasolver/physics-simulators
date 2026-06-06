# 水産資源 MSY 最大持続生産量シミュレーター — Schaefer

タラやマグロ、ニシン、カタクチイワシなど主要な水産資源について、Schaefer・Pella-Tomlinson・Fox の余剰生産モデルから MSY（最大持続生産量）・B_MSY・F_MSY を計算します。現在の資源量と漁獲圧を入力すると、Kobe plot 上の象限（健全／再建中／過剰漁獲／危機）と予防的 TAC（漁獲枠）が即座にわかります。

**Category:** 水産資源・MSY

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/fishery-msy-stock-assessment.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/fishery-msy-stock-assessment.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/fishery-msy-stock-assessment.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/fishery-msy-stock-assessment
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
