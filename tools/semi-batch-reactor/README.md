# 半回分反応器シミュレーター

反応物Bを最初に仕込み、反応物Aを運転中にゆっくり滴下する半回分（セミバッチ）反応器を計算するツールです。滴下流量・反応速度定数・初期仕込み量を変えると、各成分の濃度変化・転化率・反応液量、そして未反応Aの蓄積率がリアルタイムで分かります。

**Category:** 化学工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/semi-batch-reactor.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/semi-batch-reactor.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/semi-batch-reactor.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/semi-batch-reactor
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
