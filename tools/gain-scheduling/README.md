# ゲインスケジューリング制御シミュレーター

運転点によってゲインが変わる非線形プラントを制御するツールです。固定ゲイン制御とゲインスケジュール制御を切り替え、運転点を動かすと、実ループゲイン・設計値からの偏差・推定オーバーシュートがリアルタイムで変わり、なぜスケジューリングが必要かを体感できます。

**Category:** 制御工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/gain-scheduling.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/gain-scheduling.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/gain-scheduling.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/gain-scheduling
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
