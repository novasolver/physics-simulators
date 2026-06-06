# シューティング法シミュレーター

シューティング法シミュレーター: 区間の両端で条件が決まった境界値問題を「シューティング（射撃）法」で解くツールです。左端の初期勾配を当て推量しては右端まで積分し、目標値からの外れ量を見て撃ち直す——大砲で的を狙う過程をリアルタイムで可視化します。''=c·y を初期値問題に変換し、4次ルンゲ・クッタ法で積分しながら初期勾配を反復調整。線形問題なら2回の射撃で境界条件に的中する様子を可視化できます。

**Category:** 数値解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/shooting-method.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/shooting-method.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/shooting-method.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/shooting-method
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
