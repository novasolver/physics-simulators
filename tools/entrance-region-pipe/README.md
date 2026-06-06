# 管入口区間 助走距離シミュレーター

管に流体が入ってから速度プロファイルが完成するまでの「助走距離（発達距離 Le）」を計算するツールです。管径・流速・流体を変えると、レイノルズ数・層流／乱流の判定・入口区間の長さがリアルタイムで分かり、流れが十分発達したかを確認できます。

**Category:** 流体力学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/entrance-region-pipe.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/entrance-region-pipe.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/entrance-region-pipe.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/entrance-region-pipe
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
