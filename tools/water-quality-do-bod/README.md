# 河川のDO/BOD水質シミュレーター — Streeter-Phelps 式

河川に有機物が流入したときの下流方向の溶存酸素（DO）の落ち込みと回復をStreeter-Phelps式でリアルタイム計算。脱酸素速度・再曝気速度・流速・初期DO不足を変えて臨界DO・臨界距離・水質判定を確認できる無料の環境工学シミュレーターです。

**Category:** 環境工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/water-quality-do-bod.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/water-quality-do-bod.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/water-quality-do-bod.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/water-quality-do-bod
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
