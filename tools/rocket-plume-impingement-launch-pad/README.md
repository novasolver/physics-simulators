# ロケット排気プルーム 発射台衝撃シミュレーター

Falcon 9・Starship・SLS など主要ロケットエンジンの排気プルームが発射台に与える熱流束・音響レベル(SPL)・水デリュージ冷却を可視化するツールです。エンジン種別・基数・発射台までの距離・水冷却量を変えると、Bartz 相関と Eldred-Plumblee 音響モデルに基づく主要荷重がリアルタイムで分かります。

**Category:** ロケット・発射台設計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rocket-plume-impingement-launch-pad.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rocket-plume-impingement-launch-pad.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rocket-plume-impingement-launch-pad.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rocket-plume-impingement-launch-pad
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
