# 引張場作用シミュレーター — プレートガーダー

プレートガーダー（鈑桁）の薄いウェブは、低いせん断応力で斜めに座屈します。しかしそれは破壊ではなく、座屈したウェブは対角の引張帯として荷重を支え続けます。ウェブ寸法と補剛材間隔を変えて、この「引張場作用」による座屈後の終局せん断強度を確かめましょう。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/tension-field-action.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/tension-field-action.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/tension-field-action.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/tension-field-action
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
