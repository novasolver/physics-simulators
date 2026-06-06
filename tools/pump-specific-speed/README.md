# ポンプ比速度シミュレーター

ポンプの運転条件（吐出し量・全揚程・回転数・段数）から比速度 Ns を計算し、最適な羽根車の形を判定するツールです。スライダーを動かすと、渦巻から軸流まで羽根車の断面形状がリアルタイムに変わり、比速度という「形を表す数」の意味が直感的に分かります。

**Category:** 流体力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pump-specific-speed.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pump-specific-speed.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pump-specific-speed.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pump-specific-speed
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
