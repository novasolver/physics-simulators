# LQR 倒立振子シミュレーター — 最適レギュレータと状態フィードバック

カート上の倒立振子を LQR 状態フィードバックで安定化。状態重み Q と入力ペナルティ R を調整して、応答の速さと入力の大きさのトレードオフを学べます。

**Category:** 制御工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/lqr-2dof.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/lqr-2dof.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/lqr-2dof.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/lqr-2dof
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
