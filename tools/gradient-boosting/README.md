# 勾配ブースティング シミュレーター

浅い回帰木という「弱い学習器」を1本ずつ残差に当てはめ、足し合わせて強い予測器を組み立てるのが勾配ブースティングです。木の本数・学習率・深さ・ノイズを変えると、訓練誤差がどう下がり、どこから過学習に入るかをリアルタイムで体感できます。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/gradient-boosting.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/gradient-boosting.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/gradient-boosting.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/gradient-boosting
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
