# 弦の定常波・共鳴シミュレーター

弦長・線密度・張力・倍音次数を設定して定常波アニメーションをリアルタイム描画。固定端-固定端・固定端-自由端の境界条件に対応。節と腹をラベル表示し、周波数スペクトルバーチャートも表示。波速・基本振動数・n次倍音・波長・節数を自動計算。

**Category:** 物理シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/standing-wave-string.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/standing-wave-string.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/standing-wave-string.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/standing-wave-string
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
