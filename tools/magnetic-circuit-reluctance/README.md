# 磁気回路（磁気抵抗）シミュレーター

電磁石やインダクタの鉄心を流れる磁束を、磁気回路（磁気抵抗）として解くツールです。コイルの巻数・電流・鉄心寸法・空隙長を変えると、起磁力・磁気抵抗・磁束・磁束密度・インダクタンスがリアルタイムで分かり、薄い空隙が回路をどれだけ支配するかを可視化できます。

**Category:** 電気工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/magnetic-circuit-reluctance.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/magnetic-circuit-reluctance.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/magnetic-circuit-reluctance.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/magnetic-circuit-reluctance
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
