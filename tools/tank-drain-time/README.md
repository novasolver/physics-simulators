# タンクの排水時間（トリチェリ）シミュレーター

円筒タンクが底のオリフィスから水を排出する時間を計算するツールです。トリチェリの定理 v=√(2gh) と質量保存を組み合わせた準定常解析により、タンク径・排水口径・水位を変えると完全排水時間と出口流速がリアルタイムで分かり、排水ピットや薬液貯槽の設計を検討できます。

**Category:** 流体工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/tank-drain-time.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/tank-drain-time.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/tank-drain-time.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/tank-drain-time
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
