# 軸の危険速度（危険回転数）シミュレーター

円板を取付けた回転軸の「危険速度」を求めるツールです。軸径・支持間距離・円板の質量・運転回転数を変えると、軸の曲げ剛性・静たわみ・曲げ固有振動数からふれまわり共振が起きる危険速度がリアルタイムで分かり、共振を避けた安全な回転機械を設計できます。

**Category:** 振動工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/critical-speed-shaft.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/critical-speed-shaft.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/critical-speed-shaft.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/critical-speed-shaft
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
