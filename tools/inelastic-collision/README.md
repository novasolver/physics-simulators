# 完全非弾性衝突 シミュレーター — 運動量保存とエネルギー損失

2 物体の質量 m_1, m_2 と速度 v_1, v_2 から、運動量保存則による合体後の共通速度 v_f、初期/最終運動エネルギー、エネルギー損失率を実時間に計算します。衝突前後の物体配置と KE 棒グラフを可視化し、最もエネルギーを失う衝突を直感的に学べます。

**Category:** 衝突力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/inelastic-collision.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/inelastic-collision.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/inelastic-collision.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/inelastic-collision
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
