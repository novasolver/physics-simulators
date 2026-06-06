# 配管エルボの推力（運動量）シミュレーター

配管のエルボ（曲がり）には、流れの向きが変わることで大きな推力（スラスト力）が働きます。管内径・流量・ゲージ圧力・流体密度・曲がり角度を変えると、検査体積の運動量バランスから求まる合力と、その作用方向がリアルタイムで分かります。スラストブロックや固定金具の設計に使えます。

**Category:** 流体力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pipe-bend-thrust.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pipe-bend-thrust.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pipe-bend-thrust.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pipe-bend-thrust
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
