# 高電圧 避雷器 定格電圧設計 — IEC 60099

送電系統の避雷器（ZnO/MOV）を IEC 60099 に基づいて設計するツールです。系統電圧・接地方式・雷電流・設置距離を変えると、避雷器の定格電圧・MCOV 妥当性・残留電圧・吸収エネルギー・変圧器との絶縁協調マージンがリアルタイムで分かります。

**Category:** 送電・絶縁協調

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/high-voltage-lightning-arrester-rated.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/high-voltage-lightning-arrester-rated.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/high-voltage-lightning-arrester-rated.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/high-voltage-lightning-arrester-rated
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
