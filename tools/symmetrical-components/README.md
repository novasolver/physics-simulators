# 対称分シミュレーター — 三相不平衡の正相・逆相・零相分解

不平衡な三相電圧を、フォーテスキュー法で平衡した3つの対称分（正相・逆相・零相）に分解します。V_a, V_b, V_c の振幅と V_b の位相を変えると、各分の大きさと電圧不平衡率VUFがリアルタイムに更新されます。

**Category:** 電力工学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/symmetrical-components.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/symmetrical-components.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/symmetrical-components.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/symmetrical-components
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
