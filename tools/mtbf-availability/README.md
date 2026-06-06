# MTBF・MTTR と稼働率シミュレーター

修理しながら使い続けるシステムが「どれだけ頼りになるか」を評価するツールです。総稼働時間・故障回数・修復時間を変えると、MTBF（平均故障間隔）・稼働率（アベイラビリティ）・ミッション信頼度・年間ダウンタイムがリアルタイムで分かり、「何ナイン」の水準かを確認できます。

**Category:** 信頼性工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/mtbf-availability.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/mtbf-availability.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/mtbf-availability.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/mtbf-availability
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
