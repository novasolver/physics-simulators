# 送電線のコロナ損失シミュレーター

高圧送電線の導体まわりで起こるコロナ放電と、その電力損失を計算するツールです。線間電圧・導体半径・相間距離を変えると、コロナが始まる臨界破壊電圧と、1km当たりのコロナ損失がリアルタイムで分かり、損失を抑える導体設計を探せます。

**Category:** 電気工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/corona-loss-transmission.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/corona-loss-transmission.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/corona-loss-transmission.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/corona-loss-transmission
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
