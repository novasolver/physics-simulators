# 自在継手の速度変動シミュレーター

自在継手（フックジョイント・カルダンジョイント）の速度変動を計算。交差角・入力回転数・回転角を変えると、出力軸が1回転に2回速くなり遅くなる不等速性と速度変動率がリアルタイムで分かる無料シミュレーターです。二重継手で変動が打ち消される様子も確認できます。

**Category:** 機械要素設計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/universal-joint-velocity.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/universal-joint-velocity.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/universal-joint-velocity.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/universal-joint-velocity
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
