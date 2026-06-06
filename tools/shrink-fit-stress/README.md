# 焼嵌め応力シミュレーター — 厚肉円筒の Lamé 解

焼嵌め応力シミュレーターは、ラメ（Lamé）の厚肉円筒理論で中実軸と外側スリーブの締代から接触圧 p・スリーブのフープ応力 σθ・軸内の圧縮応力・伝達可能トルクをリアルタイム計算します。締代と寸法を変えて、嵌合界面の応力が安全範囲かを直感的に確認できます。

**Category:** 構造解析シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/shrink-fit-stress.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/shrink-fit-stress.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/shrink-fit-stress.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/shrink-fit-stress
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
