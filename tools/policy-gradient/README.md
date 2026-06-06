# 方策勾配法シミュレーター — 強化学習

強化学習の代表的アルゴリズム「方策勾配法（REINFORCE）」を体験するツールです。連続行動のタスクで、ガウス方策の平均がどのように最適行動へ滑り寄っていくか、ベースラインが勾配のばらつきをどれだけ抑えるかを、固定シードの決定論的な計算でリアルタイムに可視化します。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/policy-gradient.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/policy-gradient.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/policy-gradient.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/policy-gradient
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
