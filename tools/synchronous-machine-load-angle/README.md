# 同期機の負荷角（電力・脱出）シミュレーター

電力系統につながった円筒形同期機が、回転子の負荷角 δ を通してどれだけの電力を伝えるかを計算するツールです。端子電圧・励磁起電力・同期リアクタンスを変えると、有効電力・無効電力・最大電力（脱出電力）・安定余裕がリアルタイムで分かり、脱調しない運転点を探せます。

**Category:** 電気工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/synchronous-machine-load-angle.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/synchronous-machine-load-angle.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/synchronous-machine-load-angle.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/synchronous-machine-load-angle
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
