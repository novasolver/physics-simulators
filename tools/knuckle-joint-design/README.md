# ナックルジョイントの設計シミュレーター

2本のロッドをピンで連結して引張力を伝えるナックルジョイント（クレビス＋アイ）の強度を、ロッド引張・ピン二面せん断・アイ支圧の3つの破壊モードで同時に計算します。寸法を動かして、どのモードが先に壊れるかを直感的に把握できます。

**Category:** 機械要素

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/knuckle-joint-design.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/knuckle-joint-design.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/knuckle-joint-design.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/knuckle-joint-design
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
