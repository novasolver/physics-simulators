# スピーカーのThiele-Smallパラメータ シミュレーター

ムービングコイル型スピーカーユニットの「設計図」とも言えるThiele-Smallパラメータを計算するツールです。振動系の質量・サスペンションの柔らかさ・力係数などを変えると、共振周波数 fs・各種Q値・等価容積 Vas がリアルタイムで分かり、密閉箱とバスレフのどちらが向くかを判定できます。

**Category:** 音響工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/loudspeaker-thiele-small.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/loudspeaker-thiele-small.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/loudspeaker-thiele-small.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/loudspeaker-thiele-small
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
