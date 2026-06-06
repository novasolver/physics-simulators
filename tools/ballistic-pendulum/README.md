# 弾道振り子シミュレーター

弾丸を吊り下げたブロックに撃ち込み、振り上がる高さと角度から弾丸の初速を逆算する古典的な装置「弾道振り子」を可視化するツールです。弾丸の質量・初速、ブロック質量、振り子の長さを変えると、非弾性衝突の運動量保存と振り上げのエネルギー保存という2つの段階がリアルタイムで分かります。

**Category:** 力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ballistic-pendulum.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ballistic-pendulum.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ballistic-pendulum.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ballistic-pendulum
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
