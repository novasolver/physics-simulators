# カスケード制御シミュレーター

内側ループ $G_i(s) = \frac{K_i}{\tau_i s+1}$ と外側ループを組み合わせた2重PID制御のステップ応答を可視化。単ループとの差を体感しよう。

**Category:** 制御工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/cascade-control.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/cascade-control.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/cascade-control.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/cascade-control
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
