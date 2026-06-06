# 学習率スケジュール シミュレーター

ニューラルネットワークの訓練で使う「学習率スケジュール」を可視化するツールです。ステップ減衰・指数減衰・コサインアニーリングを切り替え、初期学習率や減衰パラメータを動かすと、学習率がエポックごとにどう変化し、損失谷を下るボールの歩幅がどう変わるかをリアルタイムで確認できます。

**Category:** 機械学習

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/learning-rate-schedule.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/learning-rate-schedule.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/learning-rate-schedule.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/learning-rate-schedule
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
