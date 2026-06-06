# 鉄筋の定着長さシミュレーター

鉄筋コンクリートで、引張鉄筋が引き抜けずに降伏強度まで力を出すために必要な「定着長さ（埋め込み長さ）」を設計するツールです。鉄筋径・材料強度・上端筋・エポキシ塗装を変えると、必要な定着長さと付着応力がリアルタイムで分かります。

**Category:** 構造解析

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rc-development-length.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rc-development-length.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rc-development-length.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rc-development-length
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
