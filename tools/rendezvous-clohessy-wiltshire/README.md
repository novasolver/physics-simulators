# Clohessy-Wiltshire ランデブー軌道シミュレーター

追跡機（チェイサー）が目標衛星（ターゲット）にランデブー・ドッキングするための軌道を設計するツールです。目標高度・初期相対位置・移動時間を変えると、CW 方程式の閉解析解から2インパルス機動の Δv 予算がリアルタイムで分かり、燃料に見合う接近経路を探せます。

**Category:** 宇宙工学・軌道力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rendezvous-clohessy-wiltshire.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rendezvous-clohessy-wiltshire.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rendezvous-clohessy-wiltshire.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rendezvous-clohessy-wiltshire
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
