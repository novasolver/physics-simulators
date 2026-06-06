# アイダイアグラム シミュレーター

高速デジタル信号の品質を一目で表す「アイダイアグラム」をブラウザで再現するツールです。ビットレート・立ち上がり時間・ジッタ・振幅ノイズを変えると、多数の単位区間を重ね描きしたアイがリアルタイムで開いたり閉じたりし、アイ開口高さ・開口幅・Q値が分かります。

**Category:** 電気・通信

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/eye-diagram.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/eye-diagram.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/eye-diagram.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/eye-diagram
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
