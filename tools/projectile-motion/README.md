# 放物運動シミュレーター

初速度や発射角、高度をスライダーで動かすと弾道軌跡がリアルタイムに描かれ、飛距離・最高点・滞空時間も同時に算出。月・火星・木星と重力を切り替えられ、空気抵抗ありのRK4数値解にも対応します。

**Category:** 物理シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/projectile-motion.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/projectile-motion.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/projectile-motion.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/projectile-motion
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
