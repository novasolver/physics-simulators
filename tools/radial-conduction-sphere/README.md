# 球の半径方向熱伝導シミュレーター

球殻（中空の球状の壁）を半径方向に流れる定常熱伝導を可視化するツールです。内半径・外半径・熱伝導率・内外表面温度を変えると、熱抵抗・熱流量・熱流束と半径方向の温度プロファイルがリアルタイムで分かり、断熱タンクや極低温デュワーの保温設計に使えます。

**Category:** 熱工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/radial-conduction-sphere.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/radial-conduction-sphere.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/radial-conduction-sphere.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/radial-conduction-sphere
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
