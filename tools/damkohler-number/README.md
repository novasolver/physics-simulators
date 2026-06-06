# ダムケラー数シミュレーター — 反応と滞留時間

化学反応器の性能を支配する無次元数「ダムケラー数 Da」を体験するツールです。反応速度定数・滞留時間・入口濃度を変えると、CSTR と PFR の転化率と出口濃度がリアルタイムで分かり、反応と流れのどちらが律速になっているかを直感的につかめます。

**Category:** 反応工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/damkohler-number.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/damkohler-number.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/damkohler-number.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/damkohler-number
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
