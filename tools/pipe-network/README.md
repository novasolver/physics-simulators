# 管路ネットワーク解析 — Hardy Cross法

管路ネットワーク解析ツール「NovaSolver」でHardy Cross法を体験。Darcy-Weisbach式に基づき、3ループ8管路の流量分配をシミュレーション。管路粗さや粘性、需要流量をスライダーで直感的に操作し、水頭損失と流速の収束計算を視覚的に学べます。

**Category:** 流体解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pipe-network.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pipe-network.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pipe-network.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pipe-network
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
