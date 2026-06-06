# しまりばめのトルク伝達シミュレーター

軸をハブの穴より少しだけ太く作り、圧入や焼きばめで締結する「しまりばめ」を設計するツールです。しめしろ・軸径・ハブ外径・嵌合長さを変えると、嵌合面に生じる接触面圧、伝えられるトルク、軸方向の保持力、ハブ内周の応力がリアルタイムで分かります。

**Category:** 機械要素設計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/interference-fit-torque.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/interference-fit-torque.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/interference-fit-torque.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/interference-fit-torque
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
