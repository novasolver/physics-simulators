# 地形図・等高線シミュレーター

関数を変えるだけで生まれる仮想地形に、等高線図・勾配ヒートマップ・断面プロファイルが同時に描かれます。等高線はマーチングスクエア法で抽出しており、CAEポストプロセスの基礎を実感できます。

**Category:** 地形・可視化

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/topology-maps.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/topology-maps.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/topology-maps.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/topology-maps
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
