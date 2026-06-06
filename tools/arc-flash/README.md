# アークフラッシュ解析ツール

IEEE 1584-2018簡易式に基づき、系統電圧・事故電流・作業距離から入射エネルギーとPPEカテゴリをリアルタイム算出。危険ゾーンを同心円で可視化します。

**Category:** 電気安全

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/arc-flash.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/arc-flash.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/arc-flash.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/arc-flash
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
