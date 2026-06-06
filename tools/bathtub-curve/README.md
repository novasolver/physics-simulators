# バスタブ曲線（故障率）シミュレーター

製品の故障率が稼働寿命を通じてどう変化するかを表す「バスタブ曲線」を可視化するツールです。初期故障・偶発故障・摩耗故障の3成分を変化させると、評価時点での総故障率 λ(t) と、いま製品がどのライフ段階にあるかがリアルタイムで分かります。

**Category:** 信頼性工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/bathtub-curve.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/bathtub-curve.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/bathtub-curve.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/bathtub-curve
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
