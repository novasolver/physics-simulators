# コンテナ船 段積み荷重シミュレーター

コンテナ船のベイで何段まで積めるか、底段コンテナの隅金具にどれだけの力がかかるかをリアルタイム計算するツールです。コンテナ規格・段数・海象（横揺れ加速度）・ラッシング方式を変えて、CSC 規定の最大段積み荷重を超えないか、嵐遭遇時に転覆しないかを設計段階で確認できます。

**Category:** 海運・コンテナ

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/container-ship-stacking-grav-acc.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/container-ship-stacking-grav-acc.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/container-ship-stacking-grav-acc.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/container-ship-stacking-grav-acc
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
