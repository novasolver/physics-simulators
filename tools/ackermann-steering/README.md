# アッカーマン・ステアリング ジオメトリ シミュレーター

車が曲がるとき、内側と外側の前輪は半径の違う円をたどるため、別々の角度に切る必要があります。ホイールベース・トレッド・操舵角を変えると、内輪・外輪の舵角や旋回半径がリアルタイムで分かり、タイヤをこすらず曲がるアッカーマン幾何を直感的に理解できます。

**Category:** 自動車工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ackermann-steering.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ackermann-steering.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ackermann-steering.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ackermann-steering
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
