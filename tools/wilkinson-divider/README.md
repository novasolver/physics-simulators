# ウィルキンソン電力分配器シミュレーター

RF・マイクロ波回路で1つの信号を2つに分ける（または合成する）ウィルキンソン電力分配器を設計するツールです。系統インピーダンス・動作周波数・基板の比誘電率・分配比を変えると、分岐線路のインピーダンス、アイソレーション抵抗、λ/4線路長がリアルタイムで分かります。

**Category:** 高周波・RF

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wilkinson-divider.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wilkinson-divider.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wilkinson-divider.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wilkinson-divider
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
