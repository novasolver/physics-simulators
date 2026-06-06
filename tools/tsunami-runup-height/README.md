# 津波遡上高 Run-up シミュレーター

海溝型地震のモーメントマグニチュード Mw・震央距離・沖合波高・海岸傾斜・沿岸形状・植生被覆を変えると、津波の遡上高 R・浸水距離・到達時間・被害クラスがリアルタイムで分かります。Synolakis の平面斜面式と Green 則の浅水化増幅をベースに、3.11 級の巨大津波まで評価できます。

**Category:** 防災工学・津波

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/tsunami-runup-height.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/tsunami-runup-height.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/tsunami-runup-height.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/tsunami-runup-height
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
