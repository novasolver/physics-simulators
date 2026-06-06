# 散水濾床（バイオフィルタ）設計シミュレーター

石材やプラスチック媒体の表面に育つバイオフィルムで BOD を分解する伝統的な生物処理プロセスを、NRC 式と Velz 温度補正で設計するツールです。流入濃度・流量・還流比・濾床高さを動かすと、必要な濾床容積・面積・水力負荷・有機物負荷がリアルタイムに更新され、活性汚泥法と比べた敷地規模感がつかめます。

**Category:** 水処理・生物処理

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/biofilter-trickling.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/biofilter-trickling.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/biofilter-trickling.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/biofilter-trickling
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
