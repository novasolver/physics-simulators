# ジュリーの安定判別シミュレーター — 離散時間系

離散時間（ディジタル）制御系の特性多項式の係数を入力すると、ジュリー表を自動で組み立て、全ての根が複素z平面の単位円内にあるかを判定します。根を解かずに安定性が分かる仕組みを、z平面プロットと根の絶対値グラフで同時に確かめられます。

**Category:** 制御工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/jury-stability-test.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/jury-stability-test.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/jury-stability-test.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/jury-stability-test
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
