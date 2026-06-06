# TCP 帯域・遅延積 BDP ウィンドウ最適化

TCP の帯域遅延積 (BDP) からリンク帯域・RTT・MSS・パケット損失率・TCP変種 (CUBIC/Reno/BBR/Vegas)・OS チューニングを変えて、ウィンドウサイズと実効スループットを最適化する無料シミュレーターです。Mathis 上限・輻輳ウィンドウも同時に計算します。

**Category:** ネットワーク・TCP

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/data-network-tcp-bandwidth-bdp.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/data-network-tcp-bandwidth-bdp.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/data-network-tcp-bandwidth-bdp.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/data-network-tcp-bandwidth-bdp
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
