# ひずみゲージ ロゼット解析シミュレーター

3枚のひずみゲージを組み合わせた「ロゼット」の読みから、面内の完全なひずみ状態を解くツールです。各ゲージの読み εa・εb・εc を入力すると、εx・εy・γxy、主ひずみ、主方向、そしてフックの法則による主応力がリアルタイムで求まり、ひずみのモール円も描かれます。

**Category:** 材料力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/strain-rosette.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/strain-rosette.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/strain-rosette.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/strain-rosette
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
