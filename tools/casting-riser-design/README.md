# 鋳造ライザー（押湯）設計シミュレーター

鋳物の凝固欠陥を防ぐ押湯（ライザー／feeder）の設計シミュレーター。チボリノフの法則 t_s=K·M² から、鋳物とライザーのモジュラス比・凝固時間・ライザー体積比を計算し、Caine基準 M_r≥1.2·M_c を満たす押湯寸法を求められます。

**Category:** 鋳造工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/casting-riser-design.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/casting-riser-design.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/casting-riser-design.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/casting-riser-design
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
