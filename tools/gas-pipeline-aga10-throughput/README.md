# 天然ガスパイプライン流量 AGA 10・Weymouth シミュレーター

長距離高圧の天然ガス幹線パイプラインの輸送容量を計算するツールです。管径・パイプ長・入口/出口圧力・ガス比重・温度・粗さを変えると、Weymouth／Panhandle A・B／AGA 10 の各式での流量、管内流速、圧力勾配、浸食限界速度、Reynolds 数がリアルタイムで分かります。

**Category:** ガス輸送・パイプライン

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/gas-pipeline-aga10-throughput.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/gas-pipeline-aga10-throughput.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/gas-pipeline-aga10-throughput.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/gas-pipeline-aga10-throughput
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
