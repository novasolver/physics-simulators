# ラウス・フルビッツ安定判別シミュレーター

制御系の特性方程式の係数を入力すると、ラウス配列を自動で組み立て、第1列の符号変化を数えてシステムが安定か不安定かを判定します。根を解かずに安定性が分かる仕組みを、s平面プロットとステップ応答で同時に確かめられます。

**Category:** 制御工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/routh-hurwitz.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/routh-hurwitz.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/routh-hurwitz.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/routh-hurwitz
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
