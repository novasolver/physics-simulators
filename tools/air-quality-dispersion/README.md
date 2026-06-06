# 大気拡散計算（ガウシアンプルーム）

NovaSolverの大気拡散シミュレーターは、パスキル安定度クラスとガウシアンプルームモデルを用いて、汚染物質の拡散を無料でシミュレーション。排出源の条件を入力するだけで、最大地上濃度や到達距離を即座に計算し、視覚的に濃度分布を確認できます。環境影響評価に役立つオンライン計算ツールです。

**Category:** 環境・エネルギー

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/air-quality-dispersion.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/air-quality-dispersion.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/air-quality-dispersion.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/air-quality-dispersion
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
