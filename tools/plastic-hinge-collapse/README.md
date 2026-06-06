# 塑性ヒンジと崩壊荷重シミュレーター

延性のある梁は、最初の断面が降伏しても即座には壊れません。塑性ヒンジが一つずつ形成され、構造が機構になったとき崩壊します。支持条件・荷重・全塑性モーメントを変えて、機構法による真の崩壊荷重と安全余裕をリアルタイムに確かめられるツールです。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/plastic-hinge-collapse.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/plastic-hinge-collapse.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/plastic-hinge-collapse.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/plastic-hinge-collapse
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
