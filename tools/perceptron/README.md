# パーセプトロン学習シミュレーター — 線形分類器の収束

パーセプトロン学習シミュレーターは、2入力単純パーセプトロン y = sign(w1·x1 + w2·x2 + b) の学習則をブラウザ上で実行し、線形分離可能な2クラスデータに対して決定境界が収束するまでの過程を可視化します。学習率・エポック数・初期重みを調整できます。

**Category:** 機械学習シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/perceptron.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/perceptron.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/perceptron.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/perceptron
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
