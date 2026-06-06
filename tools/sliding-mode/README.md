# スライディングモード制御 — VSC とロバスト性

スライディングモード制御（SMC）シミュレーター。境界層付き切換則 u=-k·sign(s) で外乱を受ける2次系を原点へ収束させ、スライディング面係数c・切換ゲインk・境界層幅φ・外乱振幅dの変化によるロバスト性とチャタリングを可視化します。

**Category:** 制御工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/sliding-mode.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/sliding-mode.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/sliding-mode.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/sliding-mode
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
