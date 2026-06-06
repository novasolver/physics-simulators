# 人工透析器クリアランス・KoA シミュレーター

血液透析器（ヘモダイアライザ）の性能を Sweeney 式（向流型）でリアルタイム計算するツールです。KoA・血流量 Q_b・透析液流量 Q_d・治療時間・体水分量を変えると、クリアランス K と Kt/V・URR・透析後 BUN がすぐに分かり、NKF-K/DOQI 推奨値（Kt/V≥1.2）に対する透析十分性を判定できます。

**Category:** 医工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/hemodialyzer-clearance.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/hemodialyzer-clearance.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/hemodialyzer-clearance.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/hemodialyzer-clearance
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
