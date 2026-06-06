# BMS セルバランシング シミュレーター — パッシブ vs アクティブ

EV や定置用 ESS の直列リチウムイオン電池パックで、BMS（バッテリーマネジメントシステム）のセルバランシングを設計するツールです。パッシブ抵抗放電と、キャパシタ／インダクタ／変圧器を用いたアクティブ方式を切り替え、均一化に必要な時間・損失エネルギー・コストを比較できます。

**Category:** 電池工学・BMS

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/battery-cell-balancing-active.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/battery-cell-balancing-active.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/battery-cell-balancing-active.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/battery-cell-balancing-active
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
