# 魚道設計 流速バリアシミュレーター

ダムや堰で分断された河川に取り付ける「魚道」の設計ツールです。対象魚種・体長・水温と、1区画落差・水深・水路幅・プール数を変えると、プール間流速・流量・EDF（エネルギー消散）・総落差がリアルタイムで分かり、サケやマスが遡上できる魚道形状を探せます。

**Category:** 水利環境・魚道

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/fish-passage-velocity-barrier.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/fish-passage-velocity-barrier.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/fish-passage-velocity-barrier.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/fish-passage-velocity-barrier
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
