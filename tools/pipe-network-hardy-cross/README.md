# ハーディ・クロス法 配管網シミュレーター

ループを含む配管網の流量分布を求める古典的反復法「ハーディ・クロス法」を体験するツールです。同じ2節点を結ぶ並列2管に全流量を流し、抵抗係数と初期配分を変えると、反復が進むにつれて各管の流量がどう収束していくかをリアルタイムで観察できます。

**Category:** 流体工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pipe-network-hardy-cross.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pipe-network-hardy-cross.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pipe-network-hardy-cross.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pipe-network-hardy-cross
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
