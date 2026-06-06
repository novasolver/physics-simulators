# 電動機の始動電流シミュレーター

三相誘導電動機を電源につないだ瞬間に流れる大きな始動電流（突入電流）を計算するツールです。定格出力・電圧・効率・力率を変え、直入れ・スターデルタ・ソフトスタータの3方式で始動電流と始動トルクがどう変わるかをリアルタイムで比べられます。

**Category:** 電気工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/motor-starting-current.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/motor-starting-current.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/motor-starting-current.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/motor-starting-current
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
