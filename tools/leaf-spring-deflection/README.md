# リーフ（板）スプリングのたわみシミュレーター

トラック・トレーラー・鉄道車両の懸架装置（サスペンション）に使われる多枚重ね板ばねを設計するツールです。有効長さ・板幅・板厚・荷重・板枚数を変えると、先端の撓み・付け根の最大曲げ応力・ばね定数・ひずみエネルギーがリアルタイムで分かります。

**Category:** 機械要素

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/leaf-spring-deflection.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/leaf-spring-deflection.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/leaf-spring-deflection.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/leaf-spring-deflection
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
