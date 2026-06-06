# 太陽同期軌道 SSO 設計シミュレーター — J2 昇交点歳差

地球扁平（J2 摂動）による昇交点歳差を太陽公転角速度に同調させる、地球観測衛星の標準軌道「太陽同期軌道」を設計するツールです。軌道高度・LTAN・繰り返し周期を変えると、必要傾斜角・1 日軌道数・赤道地上トラック間隔・蝕時間がリアルタイムで分かります。

**Category:** 宇宙工学・地球観測

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/sun-synchronous-orbit.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/sun-synchronous-orbit.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/sun-synchronous-orbit.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/sun-synchronous-orbit
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
