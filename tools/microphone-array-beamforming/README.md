# マイクロホンアレイ・ビームフォーミング シミュレーター

複数マイクを直線状に並べ、遅延加算（Delay-and-Sum）法で特定方向の音だけを強調するビームフォーマを設計するツールです。マイク数・間隔・周波数・目標方向を変えると、ビーム幅・アレイ利得・干渉源抑圧・空間エイリアシング上限がリアルタイムで分かり、スマートスピーカーや会議システムの初段マイク設計の感覚をつかめます。

**Category:** 音響・信号処理

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/microphone-array-beamforming.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/microphone-array-beamforming.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/microphone-array-beamforming.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/microphone-array-beamforming
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
