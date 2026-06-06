# フェーズドアレイアンテナ ビームステアリングシミュレーター

N 素子フェーズドアレイの位相を電子的に制御し、機械的回転なしでビームを目的方向へ向ける挙動を計算するツールです。素子数・素子間隔・周波数・ステアリング角・テーパーを変えると、位相シフト量・半値幅・利得・サイドローブ・グレーティングローブの発生がリアルタイムに分かります。

**Category:** レーダ・5G・電子走査

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/phased-array-antenna-beam-steering.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/phased-array-antenna-beam-steering.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/phased-array-antenna-beam-steering.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/phased-array-antenna-beam-steering
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
