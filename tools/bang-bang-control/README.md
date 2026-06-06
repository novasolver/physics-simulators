# バンバン制御シミュレーター — 時間最適制御

二重積分系 ẍ = u を、入力上下限 |u| ≤ u_max のもとで最短時間で原点へ到達させる「バンバン制御」を可視化するツールです。初期位置・初期速度・最大入力を変えると、切替曲線・位相平面の軌道・最短到達時間・切替時刻がリアルタイムで分かります。

**Category:** 制御工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/bang-bang-control.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/bang-bang-control.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/bang-bang-control.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/bang-bang-control
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
