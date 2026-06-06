# 外乱オブザーバー (DOB) シミュレーター — PI 単独との外乱抑制比較

1 次プロセスへの入力外乱を、公称モデルと Q フィルタで推定して打ち消す外乱オブザーバー (DOB) の効果を、PI 単独制御と並べて可視化。Q フィルタ時定数とモデル誤差の影響を体感できます。

**Category:** 制御工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/disturbance-observer.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/disturbance-observer.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/disturbance-observer.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/disturbance-observer
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
