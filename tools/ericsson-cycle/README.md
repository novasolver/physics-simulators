# エリクソンサイクル シミュレーター

2つの等温過程と2つの定圧過程からなる理想エリクソンサイクルを可視化するツールです。高温熱源温度・低温熱源温度・圧力比・比熱比を変えると、熱効率・高温熱入力・低温熱排出・正味仕事・再生熱量がリアルタイムで分かり、理想再生によってカルノー効率に達する仕組みをP-V線図アニメーションとグラフで確かめられます。

**Category:** 熱力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ericsson-cycle.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ericsson-cycle.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ericsson-cycle.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ericsson-cycle
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
