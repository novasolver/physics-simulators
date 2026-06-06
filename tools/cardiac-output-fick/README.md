# フィックの原理による心拍出量シミュレーター

心臓が1分間に送り出す血液量＝心拍出量を、酸素を体内のトレーサーとして使う「フィックの原理」で求めるツールです。酸素消費量・動脈血と静脈血の酸素含量・心拍数を変えると、心拍出量・1回拍出量・心係数・酸素抽出率がリアルタイムで分かります。

**Category:** バイオメカニクス

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/cardiac-output-fick.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/cardiac-output-fick.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/cardiac-output-fick.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/cardiac-output-fick
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
