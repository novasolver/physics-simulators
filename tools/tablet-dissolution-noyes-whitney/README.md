# 医薬品錠剤の溶出シミュレーター — Noyes-Whitney 式と USP 試験

経口錠剤が消化管液中で溶け出す速度を Noyes-Whitney 式と Hixson-Crowell 立方根則で予測するツールです。粒子径・溶解度・撹拌・USP 装置を変えると、総表面積、溶出速度定数、t50、30 分溶出率、シンク条件、USP 適合性がリアルタイムで分かります。

**Category:** 製薬・薬物動態

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/tablet-dissolution-noyes-whitney.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/tablet-dissolution-noyes-whitney.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/tablet-dissolution-noyes-whitney.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/tablet-dissolution-noyes-whitney
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
