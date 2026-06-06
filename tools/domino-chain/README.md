# ドミノ連鎖シミュレーター

2D剛体物理エンジンでドミノ連鎖をリアルタイムシミュレーション。クリックで牌を配置し、押し倒して連鎖反応を開始。角運動量の伝播（ΔL = F_imp・r_⊥・Δt）や、慣性モーメント（I=mh²/3）に基づく回転、重力トルク（τ_g）によるエネルギー変換を視覚的に学べます。物理の基本原理を体験しよう。

**Category:** 機械力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/domino-chain.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/domino-chain.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/domino-chain.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/domino-chain
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
