# ウィーンの変位則 シミュレーター — 黒体放射のピーク波長

温度 T、放射率 ε、表面積 A、距離 R からウィーンの変位則 λ_max·T = b と q = εσT⁴ をリアルタイムに計算し、黒体放射のピーク波長、単位面積放射発散度、全放射力、距離 R での放射照度を一挙に可視化します。プランク曲線と可視光帯ハッチング、T-λ_max log-log 直線で太陽・白熱電球・人体・宇宙背景放射まで同じ法則で扱える熱放射の世界を直感的に学べます。

**Category:** 熱放射シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wien-displacement.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wien-displacement.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wien-displacement.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wien-displacement
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
