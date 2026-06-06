# 低推力スパイラル軌道遷移シミュレーター

イオンエンジンやホールスラスタの「高 Isp・低推力」特性に最適化されたスパイラル軌道遷移を、Edelbaum 近似と Tsiolkovsky の式で設計します。宇宙機質量・推力・比推力・出発／目標軌道高度を変えて、所要 ΔV・推進剤質量・噴射時間が Hohmann とどう違うかをリアルタイムに比較できます。

**Category:** 宇宙工学・電気推進

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/low-thrust-spiral-trajectory.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/low-thrust-spiral-trajectory.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/low-thrust-spiral-trajectory.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/low-thrust-spiral-trajectory
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
