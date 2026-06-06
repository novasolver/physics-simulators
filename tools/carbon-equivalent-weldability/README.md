# 炭素当量と溶接性（CE_IIW・Pcm）シミュレーター

鋼材の化学成分（C・Mn・Cr+Mo+V・Ni+Cu・Si）から、国際標準の炭素当量 CE_IIW と低炭素鋼向けの割れ感受性指数 Pcm を計算し、推奨予熱温度と低温割れリスクをリアルタイムで判定します。溶接施工要領書（WPS）の入力チェックや、鋼材選定時の溶接性検討に使えます。

**Category:** 溶接工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/carbon-equivalent-weldability.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/carbon-equivalent-weldability.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/carbon-equivalent-weldability.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/carbon-equivalent-weldability
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
