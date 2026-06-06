# 定常偏差とシステム型（タイプ）シミュレーター

ユニティフィードバック制御系の「定常偏差」を、システム型 N（積分器の数）と入力信号（ステップ／ランプ／放物）から決定する古典制御の基本原理を可視化します。ループゲイン K と時定数 τ を動かしながら、位置・速度・加速度定数と追従性能がどう変わるかを直感的に確認できます。

**Category:** 制御工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/steady-state-error-type.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/steady-state-error-type.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/steady-state-error-type.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/steady-state-error-type
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
