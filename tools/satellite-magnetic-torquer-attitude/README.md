# 衛星 磁気トルカ姿勢制御シミュレーター

CubeSat（1U〜12U）の姿勢制御に使う「磁気トルカ（マグトルカ、MTQ）」を設計するツールです。軌道高度・傾斜とコイル仕様を変えると、生成できる磁気モーメント・最大トルク・目標角速度への到達時間・消費電力がリアルタイムで分かり、detumble や B-dot 制御の概略設計ができます。

**Category:** 宇宙工学・ADCS

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/satellite-magnetic-torquer-attitude.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/satellite-magnetic-torquer-attitude.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/satellite-magnetic-torquer-attitude.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/satellite-magnetic-torquer-attitude
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
