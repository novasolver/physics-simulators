# 浮屋根タンク リムシール VOC 排出量推定 — API 2517

石油精製・備蓄基地で使われる浮屋根タンク（EFRT/IFRT）から漏れる炭化水素 VOC を、API 2517 のリムシール損失式で年間排出量に換算するツールです。タンク径・シール種別・蒸気圧・風速を変えると排出量と規制適合がリアルタイムで分かり、シール改修や規制対応の事前検討に使えます。

**Category:** 石油タンク・大気環境

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/tank-roof-floating-rim-seal-emission.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/tank-roof-floating-rim-seal-emission.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/tank-roof-floating-rim-seal-emission.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/tank-roof-floating-rim-seal-emission
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
