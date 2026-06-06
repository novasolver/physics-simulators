# 抜取検査（OC曲線）シミュレーター

ロットから一部だけを抜き取って合否を決める「一回抜取検査」を設計するツールです。ロットサイズ・抜取数・合格判定個数を変えると、合格確率・平均出検品質AOQ、そしてOC曲線と生産者危険・消費者危険のトレードオフがリアルタイムで分かります。

**Category:** 品質工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/acceptance-sampling-plan.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/acceptance-sampling-plan.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/acceptance-sampling-plan.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/acceptance-sampling-plan
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
