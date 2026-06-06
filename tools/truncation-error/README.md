# 数値微分の打切り誤差・精度次数可視化

数値微分の打切り誤差と精度次数を可視化するツール。前進・後退・中心差分スキームの丸め誤差トレードオフから最適刻み幅を決定。数値解析・CAEの精度検証に。

**Category:** 解析ツール

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/truncation-error.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/truncation-error.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/truncation-error.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/truncation-error
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
