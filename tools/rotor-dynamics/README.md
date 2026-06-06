# ロータダイナミクス・臨界速度計算機

ロータダイナミクス解析ツール「NovaSolver」の臨界速度計算機。Jeffcottロータモデルに基づき、質量・剛性・減衰比・偏心量を入力するだけで臨界速度Ncを即時計算。不釣り合い応答曲線をリアルタイムに可視化し、共振通過時の挙動をシミュレーションで把握できます。回転機械の設計・振動問題解決を支援します。

**Category:** 解析ツール

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rotor-dynamics.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rotor-dynamics.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rotor-dynamics.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rotor-dynamics
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
