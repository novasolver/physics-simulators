# SIMP位相最適化シミュレーター

SIMP法（密度法）による2次元トポロジー最適化をブラウザ上でリアルタイム実行。荷重・境界条件・体積制約を自由に変更し、最適な材料配置を直感的に探索できます。ペナルティ指数p=3で中間密度を抑制し、明確な構造を導出。コンプライアンス最小化による剛性最大化の原理を、インタラクティブに体験しましょう。

**Category:** 構造最適化ツール

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/simp-topology.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/simp-topology.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/simp-topology.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/simp-topology
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
