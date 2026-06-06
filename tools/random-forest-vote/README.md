# ランダムフォレストの多数決 — bagging と分散低減

T本の決定木をbootstrap標本と特徴量サブサンプリングで学習し、多数決で予測。単一木との精度差や決定境界の滑らかさを通じて、なぜアンサンブルが分散を下げるのかを直感的に学べます。

**Category:** 機械学習シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/random-forest-vote.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/random-forest-vote.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/random-forest-vote.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/random-forest-vote
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
