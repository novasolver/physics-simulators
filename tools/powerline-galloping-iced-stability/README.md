# 送電線 ギャロッピング 着氷不安定シミュレーター — Den Hartog

着氷した送電線が横風を受けて起こす低周波・大振幅の自励振動「ギャロッピング」を、Den Hartog 基準（dCl/dα + Cd &lt; 0）で評価するツールです。導体径・着氷形状・スパン張力・風速を変えると、空力不安定の有無、振幅、相間クリアランス危険、タワー動荷重がリアルタイムで分かります。

**Category:** 送電・着氷ギャロッピング

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/powerline-galloping-iced-stability.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/powerline-galloping-iced-stability.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/powerline-galloping-iced-stability.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/powerline-galloping-iced-stability
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
