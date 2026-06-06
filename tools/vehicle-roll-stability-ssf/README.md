# 車両横転安定性 SSF シミュレーター — NHTSA 5 つ星評価

NHTSA が定義する静的安定係数 SSF=(輪距/2)/重心高 を計算し、現在のコーナリング条件で発生する横加速度と比較して横転リスクを判定します。車種・積載状態を変えると、5 つ星評価・最大安全旋回速度・ティップ／スライド先行モードがリアルタイムに更新されます。

**Category:** 車両安全・横転

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/vehicle-roll-stability-ssf.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/vehicle-roll-stability-ssf.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/vehicle-roll-stability-ssf.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/vehicle-roll-stability-ssf
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
