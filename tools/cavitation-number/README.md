# キャビテーション数シミュレーター

流れの中の液体がどれだけ蒸発（キャビテーション）に近いかを表すキャビテーション数 σ を計算するツールです。局所静圧・蒸気圧・流速を変えると、動圧と圧力余裕からσがリアルタイムで分かり、翼やバルブ・ポンプが空洞を起こす危険域にあるかを判定できます。

**Category:** 流体力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/cavitation-number.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/cavitation-number.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/cavitation-number.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/cavitation-number
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
