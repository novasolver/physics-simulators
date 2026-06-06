# 回生ブレーキ エネルギー回収シミュレーター

電気自動車・ハイブリッド車がブレーキ時に「捨てるはずだった運動エネルギー」をどれだけ電池に取り戻せるかを計算するツールです。車両質量・制動前後の速度・回生効率・1トリップの制動回数を変えると、回収エネルギーと走行距離の延長がリアルタイムで分かります。

**Category:** 自動車工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/regenerative-braking-energy.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/regenerative-braking-energy.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/regenerative-braking-energy.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/regenerative-braking-energy
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
