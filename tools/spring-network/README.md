# バネネットワークシミュレーター — 直列・並列・複合

3本のバネを直列・並列・複合で接続してシミュレーション。等価バネ定数・各バネの変位と力・蓄積エネルギーをリアルタイム計算。FEM剛性マトリクスの原点をつかもう。

**Category:** 構造力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/spring-network.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/spring-network.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/spring-network.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/spring-network
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
