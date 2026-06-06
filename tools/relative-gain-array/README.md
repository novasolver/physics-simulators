# 相対ゲイン行列（RGA）シミュレーター

複数の入力と出力を持つ多変数プロセスを、分散型の単一ループ制御で扱うとき、どの入力をどの出力に組み合わせればよいかを決めるツールです。2×2のゲイン行列を入力すると、ブリストルの相対ゲイン行列、推奨ペアリング、ループ間の相互干渉の強さがリアルタイムで分かります。

**Category:** 制御工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/relative-gain-array.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/relative-gain-array.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/relative-gain-array.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/relative-gain-array
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
