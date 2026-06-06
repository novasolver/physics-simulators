# AM/FM 変調シミュレーター

音声などのメッセージ信号を電波に「乗せる」変調のしくみを学ぶツールです。振幅変調（AM）と周波数変調（FM）を切り替え、搬送波周波数・メッセージ周波数・変調指数を変えると、変調波形・周波数スペクトル・占有帯域幅がリアルタイムで変化します。

**Category:** 信号処理

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/am-fm-modulation.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/am-fm-modulation.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/am-fm-modulation.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/am-fm-modulation
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
