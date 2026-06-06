# バンドブレーキの制動トルク シミュレーター

回転ドラムに帯（バンド）を巻き付けて止めるバンドブレーキを設計するツールです。ドラム直径・レバー操作力・巻き付き角・摩擦係数を変えると、ベルト摩擦の指数効果で生まれる緊張側・緩み側の張力と制動トルクがリアルタイムで分かります。

**Category:** 機械要素設計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/band-brake-torque.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/band-brake-torque.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/band-brake-torque.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/band-brake-torque
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
