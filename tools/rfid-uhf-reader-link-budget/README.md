# UHF RFID 通信リンクバジェット シミュレーター

パッシブ UHF RFID（EPC Gen2）の通信距離を、リーダー EIRP・タグ感度・偏波損失・周波数帯から設計するツールです。フォワードリンクとリバース（backscatter）リンクを別々に計算し、どちらが読取距離を制限しているか、多経路フェードを差し引いた実効読取距離はいくらかを可視化します。

**Category:** RFID・無線通信

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/rfid-uhf-reader-link-budget.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/rfid-uhf-reader-link-budget.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/rfid-uhf-reader-link-budget.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/rfid-uhf-reader-link-budget
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
