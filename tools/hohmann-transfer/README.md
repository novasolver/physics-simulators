# ホーマン遷移軌道 設計シミュレーター — Δv 予算と遷移時間

2 つの円軌道間を最小エネルギーで結ぶホーマン遷移を、Δv1・Δv2・合計 Δv・半周期遷移時間で実時間計算する軌道工学シミュレーター。LEO→GEO や惑星間ミッションの初期検討に。遷移角を指定する場合は『ランベルト問題』、電気推進の螺旋遷移は『低推力スパイラル軌道遷移』を併用してください。

**Category:** 軌道力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/hohmann-transfer.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/hohmann-transfer.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/hohmann-transfer.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/hohmann-transfer
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
