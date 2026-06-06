# 極軌道 地上局可視時間シミュレーター

極軌道（Polar Orbit）の地球観測衛星と地上アンテナの通信パス時間を計算するツールです。軌道高度・傾斜角・地上局の緯度・最低仰角を変えると、1パスの最大時間・1日あたりのパス回数・ミッション期間中の総ダウンリンク量がリアルタイムで分かり、衛星運用のリンクバジェットを直感的に設計できます。

**Category:** 宇宙工学・地球観測

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/polar-orbit-ground-station-pass.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/polar-orbit-ground-station-pass.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/polar-orbit-ground-station-pass.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/polar-orbit-ground-station-pass
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
