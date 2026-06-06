# 糖尿病インスリンポンプ ベーサル・ボーラスシミュレーター

1 型・2 型・LADA 糖尿病のインスリンポンプ（CSII）治療を学ぶための教育用シミュレーターです。体重とインスリン製剤から TDD・ICR・ISF を自動算出し、食事 carb・食前血糖・活性インスリンを入力すると、ベーサル率・カーボボーラス・補正ボーラスと 4 時間後の予測血糖がリアルタイムで分かります。

**Category:** 糖尿病・CSII

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/diabetic-insulin-pump-basal-bolus.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/diabetic-insulin-pump-basal-bolus.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/diabetic-insulin-pump-basal-bolus.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/diabetic-insulin-pump-basal-bolus
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
