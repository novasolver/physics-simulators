# 半導体 CMP 化学機械研磨シミュレーター

半導体ウェーハの表面を nm 級で平坦化する CMP（Chemical Mechanical Planarization）プロセスを Preston 式 RR = K_p·P·v で設計するツールです。パッド圧力・相対速度・スラリーと被研磨材料の組み合わせを変えると、除去率・総研磨量・WIWNU・スループット・コストがリアルタイムで分かります。

**Category:** 半導体プロセス・CMP

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/cmp-removal-rate-preston.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/cmp-removal-rate-preston.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/cmp-removal-rate-preston.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/cmp-removal-rate-preston
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
