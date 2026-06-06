# インタークール付きガスタービン シミュレーター

ガスタービンの圧縮を二段に分け、間に中間冷却器（インタークーラ）を置いた理想ブレイトンサイクルを可視化するツールです。圧力比・タービン入口温度・比熱比・インタークーラの有効度を変えると、圧縮仕事の削減量・タービン仕事・正味仕事がリアルタイムで分かり、T-s線図アニメーションと圧力比に対する仕事カーブが見られます。

**Category:** 熱力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/gas-turbine-intercooler.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/gas-turbine-intercooler.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/gas-turbine-intercooler.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/gas-turbine-intercooler
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
