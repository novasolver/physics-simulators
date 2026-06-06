# スラブの押し抜きせん断シミュレーター

柱で直接支えるフラットスラブの接合部で起きる「押し抜きせん断」を検討するツールです。柱寸法・スラブ有効厚・設計せん断力・コンクリート強度・柱位置を変えると、危険断面の周長・押し抜きせん断応力・許容応力・利用率がリアルタイムで分かります。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/punching-shear-slab.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/punching-shear-slab.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/punching-shear-slab.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/punching-shear-slab
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
