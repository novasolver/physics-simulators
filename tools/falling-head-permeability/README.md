# 変水位透水試験シミュレーター

細粒土の透水係数（水理伝導率）を求める変水位透水試験を再現するツールです。スタンドパイプの断面積・供試体の寸法・初期と最終の水位差・経過時間を変えると、透水係数とその透水性の等級がリアルタイムで分かります。

**Category:** 地盤工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/falling-head-permeability.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/falling-head-permeability.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/falling-head-permeability.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/falling-head-permeability
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
