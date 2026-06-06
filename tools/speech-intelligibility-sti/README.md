# STI 音声明瞭度シミュレーター

Speech Transmission Index (STI) は、残響と暗騒音による音声の劣化を変調伝達関数 (MTF) から定量化する国際標準指標です。残響時間 T60・SNR・距離・室容積・指向性を動かして、教室・劇場・PA・避難放送の音声明瞭度をリアルタイムに評価できます。

**Category:** 建築音響

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/speech-intelligibility-sti.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/speech-intelligibility-sti.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/speech-intelligibility-sti.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/speech-intelligibility-sti
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
