# Transformer アテンション基礎シミュレーター

Transformer の心臓部であるスケール付きドット積アテンションを、3 つのトークンで体感するツールです。各トークンの方向ベクトルとクエリ、温度（スケール）を変えると、ドット積スコア・softmax の注目重み・出力ベクトル・注意エントロピーがリアルタイムで変化し、「注意がどう決まるか」を直感的に理解できます。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/transformer-attention-basics.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/transformer-attention-basics.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/transformer-attention-basics.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/transformer-attention-basics
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
