# シャノンの通信路容量 シミュレーター — 情報理論の限界

帯域幅・信号電力・雑音電力をスライダーで動かすと、シャノン-ハートレーの容量C=B·log2(1+S/N)がその場で求まります。SNRやスペクトル効率の依存関係、目標速度に必要な帯域も同時にグラフ化。

**Category:** 通信工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/shannon-channel-capacity.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/shannon-channel-capacity.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/shannon-channel-capacity.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/shannon-channel-capacity
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
