# 人工膵臓 PID 血糖制御シミュレーター

1型糖尿病の人工膵臓（クローズドループインスリンポンプ）の PID 制御を設計するツールです。目標血糖・炭水化物比・PID ゲインを変えると、食後血糖プロファイル・TIR・低血糖リスクがリアルタイムで分かり、Medtronic 780G や Tandem Control-IQ のような臨床向けクローズドループの当たりづけができます。

**Category:** 医工学・制御工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/insulin-pid-glucose-control.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/insulin-pid-glucose-control.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/insulin-pid-glucose-control.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/insulin-pid-glucose-control
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
