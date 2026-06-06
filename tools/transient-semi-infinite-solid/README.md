# 半無限固体の非定常熱伝導シミュレーター

表面温度が急に変わった「とても厚い物体」の温度が、時間とともに内部へどう浸み込んでいくかを計算するツールです。熱拡散率・温度・深さ・経過時間を変えると、誤差関数による厳密解で深さ方向の温度分布と熱浸透深さがリアルタイムに分かります。

**Category:** 熱工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/transient-semi-infinite-solid.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/transient-semi-infinite-solid.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/transient-semi-infinite-solid.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/transient-semi-infinite-solid
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
