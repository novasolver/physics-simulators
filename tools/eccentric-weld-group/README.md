# 偏心荷重を受ける溶接群シミュレーター

2本の隅肉溶接で取り付けたブラケットに、溶接群の重心からずれた位置（偏心）で荷重がかかるとき、溶接にどんな応力が生じるかを弾性ベクトル法で解析するツールです。直接せん断とねじりせん断をベクトル合成し、最も危険な遠い隅の合成最大応力をリアルタイムで求めます。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/eccentric-weld-group.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/eccentric-weld-group.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/eccentric-weld-group.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/eccentric-weld-group
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
