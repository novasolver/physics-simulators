# 放電加工（EDM）の加工速度シミュレーター

形彫り放電加工（EDM）の放電条件を調整して、加工がどれだけ速く進むかを学べるツールです。ピーク放電電流・パルスオン／オフ時間・放電電圧を変えると、デューティ比・パルスエネルギー・材料除去率・表面粗さがリアルタイムで分かり、加工速度と仕上げ面のトレードオフを体感できます。

**Category:** 加工・製造

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/edm-material-removal.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/edm-material-removal.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/edm-material-removal.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/edm-material-removal
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
