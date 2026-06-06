# 555タイマ 非安定動作（発振）シミュレーター

555タイマICを非安定（アスタブル）モードで動かす発振回路を設計するツールです。抵抗 R1・R2 とコンデンサ C を変えると、発振周波数・周期・充放電時間・デューティ比がリアルタイムで分かり、コンデンサ電圧と出力の方形波が動いて見えます。

**Category:** 電子回路

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ne555-astable.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ne555-astable.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ne555-astable.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ne555-astable
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
