# IP3（三次インターセプトポイント）シミュレーター

増幅器やミキサーの「直線性」を表す三次インターセプトポイント（IP3）を計算するツールです。入力換算IP3・利得・2トーン入力レベルを変えると、出力IP3・三次相互変調（IM3）歪み積レベル・IM3抑圧比・スプリアスフリーダイナミックレンジがリアルタイムで分かります。

**Category:** 電気・通信

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/third-order-intercept-ip3.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/third-order-intercept-ip3.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/third-order-intercept-ip3.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/third-order-intercept-ip3
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
