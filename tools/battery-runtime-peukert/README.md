# 電池の稼働時間（ピューカートの法則）シミュレーター

電池に書かれた「定格容量」は、実は1つの固定値ではありません。速く電流を取り出すほど使える電気量は減ります。定格容量・ピューカート指数・放電電流を変えると、ピューカートの法則による実際の放電可能時間と容量損失がリアルタイムで分かります。

**Category:** 電気工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/battery-runtime-peukert.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/battery-runtime-peukert.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/battery-runtime-peukert.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/battery-runtime-peukert
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
