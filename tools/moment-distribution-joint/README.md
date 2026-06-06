# 節点モーメント分配シミュレーター — Hardy Cross 法の基本原理

剛接合節点に集まる3部材の長さから相対剛性 K=1/L と分配率 DF を求め、印加モーメント M_0 を各部材へ配分する様子を可視化。Σ DF=1, Σ M_i=M_0 の検算もリアルタイムで確認できます。

**Category:** 構造力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/moment-distribution-joint.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/moment-distribution-joint.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/moment-distribution-joint.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/moment-distribution-joint
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
