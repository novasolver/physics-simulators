# アトキンソンサイクル シミュレーター

膨張行程を圧縮行程より長くした「過膨張エンジン」の理想サイクルを可視化するツールです。圧縮比・比熱比・吸気条件・加熱量を変えると、熱効率・各点の温度と圧力・膨張比・正味仕事がリアルタイムで分かり、完全膨張のP-V線図アニメーションとオットーサイクルとの効率比較が見られます。

**Category:** 熱力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/atkinson-cycle.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/atkinson-cycle.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/atkinson-cycle.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/atkinson-cycle
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
