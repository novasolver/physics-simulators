# ベルコールマンサイクル（空気冷凍）シミュレーター

空気そのものを冷媒に使う「逆ブレイトンサイクル」の理想冷凍サイクルを可視化するツールです。冷却室温度・周囲温度・圧力比・比熱比を変えると、成績係数COP・圧縮後と膨張後の温度・冷凍効果・正味仕事がリアルタイムで分かり、航空機の客室空調にも使われる空気冷凍機の挙動をT-s線図アニメーションとグラフで見られます。

**Category:** 熱力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/bell-coleman-cycle.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/bell-coleman-cycle.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/bell-coleman-cycle.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/bell-coleman-cycle
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
