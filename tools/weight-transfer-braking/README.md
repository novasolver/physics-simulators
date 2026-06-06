# 制動時の荷重移動シミュレーター

ブレーキをかけると車体は前のめりになり、後輪から前輪へ荷重が移ります。車両質量・ホイールベース・重心高さ・減速度を変えると、制動時の前軸・後軸荷重、前軸荷重配分、後輪が浮き上がる限界減速度がリアルタイムで分かります。

**Category:** 自動車工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/weight-transfer-braking.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/weight-transfer-braking.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/weight-transfer-braking.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/weight-transfer-braking
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
