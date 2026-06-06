# ねじり振り子シミュレーター

軸の材料・寸法と円板の質量・半径を入力し、ねじり振り子の固有振動数と角変位波形をリアルタイムにシミュレーション。極断面2次モーメントやねじり剛性などの基本式に基づき、クランクシャフトやプロペラ軸の振動設計に直結する基礎計算を体験できるツールです。

**Category:** 振動解析ツール

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/torsion-pendulum.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/torsion-pendulum.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/torsion-pendulum.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/torsion-pendulum
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
