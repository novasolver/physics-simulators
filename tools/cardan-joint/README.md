# カルダン継手 シミュレーター — 軸交差角と角速度ムラ

フック継手（ユニバーサルジョイント）の角速度比 ω_out/ω_in をリアルタイム可視化。軸交差角βと入力軸角θから速度変動率（tan²β）を即時算出します。

**Category:** 機械要素シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/cardan-joint.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/cardan-joint.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/cardan-joint.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/cardan-joint
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
