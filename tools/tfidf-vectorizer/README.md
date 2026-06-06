# TF-IDF ベクトル化シミュレーター

文章を機械学習が扱える数値ベクトルに変換する古典的手法「TF-IDF」を体験するツールです。文書数・単語の出現回数・文書長を変えると、単語頻度 TF・逆文書頻度 IDF・TF-IDF 重みがリアルタイムで分かり、どの語がその文書を特徴づけるかが見えてきます。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/tfidf-vectorizer.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/tfidf-vectorizer.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/tfidf-vectorizer.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/tfidf-vectorizer
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
