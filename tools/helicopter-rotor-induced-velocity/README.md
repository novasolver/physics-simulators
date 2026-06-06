# ヘリコプター ロータ誘起速度・誘導損失 シミュレーター

ヘリコプターのロータがホバー時に空気を下方に押し出す「誘起速度」を運動量理論で計算し、円板荷重・FM 効率・所要電力を見積もるツールです。機種・ロータ径・翼端速度・離陸重量・前進速度・飛行高度を変えると、それぞれが空力性能にどう響くかをリアルタイムで確認できます。

**Category:** ヘリコプター・ロータ空力

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/helicopter-rotor-induced-velocity.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/helicopter-rotor-induced-velocity.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/helicopter-rotor-induced-velocity.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/helicopter-rotor-induced-velocity
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
