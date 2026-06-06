# 液体注入シミュレーター

粒子法（SPH）で液体を容器に注ぐ様子をリアルタイムに再現。重力・粘度・容器形状を変えると、飛沫・落下・着水後の落ち着きまでが粒子で表現され、鋳造充填やスロッシング解析の入口を体験できます。

**Category:** 解析ツール

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/liquid-pour.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/liquid-pour.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/liquid-pour.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/liquid-pour
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
