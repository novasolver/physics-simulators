# Softmaxと交差エントロピー損失 — 分類学習の核

3クラス分類のロジットを Softmax で確率に変換し、正解クラスとの交差エントロピー損失をリアルタイム計算。温度パラメータ T を動かして分布の鋭さと損失の変化を体感できます。

**Category:** 機械学習シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/softmax-cross-entropy.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/softmax-cross-entropy.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/softmax-cross-entropy.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/softmax-cross-entropy
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
