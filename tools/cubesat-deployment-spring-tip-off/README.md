# CubeSat 軌道投入 ばね分離・tip-off レートシミュレーター

P-POD・NanoRacks・ISIPOD・J-SSOD などのディスペンサーから CubeSat を射出するときの、ばねエネルギー・分離速度・tip-off 角速度・CDS Rev14 適合・デタンブル時間をリアルタイムに計算します。重心オフセットと慣性モーメントを変えると、軌道投入直後の姿勢挙動がどう変わるかを直感的に確認できます。

**Category:** 宇宙工学・CubeSat

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/cubesat-deployment-spring-tip-off.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/cubesat-deployment-spring-tip-off.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/cubesat-deployment-spring-tip-off.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/cubesat-deployment-spring-tip-off
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
