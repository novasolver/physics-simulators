# 腰椎 L4-L5 椎間板圧縮応力シミュレーター — NIOSH 持ち上げ作業

物流・介護・製造現場の「持ち上げ作業」で腰椎 L4-L5 椎間板にかかる圧縮力を、Chaffin の生体力学モデルで推定します。NIOSH の Action Limit (3.4 kN) と Maximum Permissible Limit (6.4 kN)、RWL と Lifting Index を同時に表示し、職業性腰痛リスクを定量評価できます。

**Category:** 人間工学・腰痛予防

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/spinal-stress-disc-lumbar.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/spinal-stress-disc-lumbar.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/spinal-stress-disc-lumbar.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/spinal-stress-disc-lumbar
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
