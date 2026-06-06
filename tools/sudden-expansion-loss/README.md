# 急拡大管の損失シミュレーター — ボルダ・カルノー

管路が急に太くなる「急拡大部」で起きるエネルギー損失を計算するツールです。小管・大管の内径と流速を変えると、ボルダ・カルノーの式による損失係数K・ヘッド損失・圧力損失と、運動量バランスから決まる静圧上昇がリアルタイムで分かります。

**Category:** 流体力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/sudden-expansion-loss.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/sudden-expansion-loss.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/sudden-expansion-loss.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/sudden-expansion-loss
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
