# 旋回半径とバンク角シミュレーター

航空機が高度を保ったまま行う定常水平旋回を解析するツールです。速度とバンク角を変えると、旋回半径・荷重倍数（G）・旋回率・360°旋回時間・旋回中の失速速度がリアルタイムで分かり、失速にも構造制限にも引っかからない安全な旋回を探せます。

**Category:** 航空宇宙

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/turn-radius-bank-angle.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/turn-radius-bank-angle.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/turn-radius-bank-angle.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/turn-radius-bank-angle
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
