# タワークレーン カウンタージブ釣合シミュレーター

高層建築現場で都市の風景をつくるタワークレーンの「ジブと荷物 vs カウンタウェイト」の釣合をリアルタイム計算します。ジブ長・カウンタウェイト・荷半径・風速を変えると、転倒モーメント・復元モーメント・安定係数が即座に変化し、転倒しない建設機械の釣合設計を体験できます。

**Category:** 建設機械・タワークレーン

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/tower-crane-counter-jib-balance.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/tower-crane-counter-jib-balance.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/tower-crane-counter-jib-balance.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/tower-crane-counter-jib-balance
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
