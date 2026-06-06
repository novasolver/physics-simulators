# リベット重ね継手の強度シミュレーター

2枚の板を重ねてリベットで結合する「重ね継手」の強度をリアルタイムで計算します。リベットせん断・板の支圧・板の引裂の3つの破壊モードを同時に評価し、最小値が継手強度・最も弱いモードが破壊モードになります。径・本数・ピッチ・板厚を変えて、航空機外板や橋梁で実際に使われている鋲接合を設計してみましょう。

**Category:** 機械要素

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/riveted-joint-strength.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/riveted-joint-strength.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/riveted-joint-strength.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/riveted-joint-strength
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
