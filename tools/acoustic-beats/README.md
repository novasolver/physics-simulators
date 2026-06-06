# 音のうなり シミュレーター — 2 音の干渉とビート周波数

わずかに異なる 2 つの周波数 f₁・f₂ の正弦波を重ね合わせると、|f₁−f₂| Hz でゆっくり強弱が脈動する「うなり（ビート）」が生まれます。本ツールは振幅 A₁・A₂ も操作可能で、合成波形・スペクトル・うなり周波数・平均周波数・うなり周期・最大合成振幅をリアルタイムに表示します。ピアノ調律やヘテロダイン受信、構造振動の近接モードまで、波の干渉を直感的に学べます。

**Category:** 音響シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/acoustic-beats.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/acoustic-beats.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/acoustic-beats.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/acoustic-beats
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
