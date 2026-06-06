# 研削の比エネルギーシミュレーター

研削加工で材料を単位体積だけ取り除くのに必要なエネルギー「比エネルギー」を、プロセスパラメータから計算するツールです。切込み深さ・送り速度・砥石周速を変えると、材料除去率・研削動力・比エネルギー・等価切りくず厚さがリアルタイムで分かり、研削焼けや目つぶれの危険を事前に判断できます。

**Category:** 加工・製造

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/grinding-specific-energy.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/grinding-specific-energy.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/grinding-specific-energy.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/grinding-specific-energy
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
