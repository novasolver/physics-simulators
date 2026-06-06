# 誘導抗力 シミュレーター — 翼端渦と L/D 比

プラントル翼理論に基づき、揚力係数 C_L、アスペクト比 AR、オズワルド効率 e、寄生抗力係数 C_D0 から誘導抗力係数 C_Di・全抗力係数 C_D・揚抗比 L/D・K ファクターを実時間計算します。翼平面形と翼端渦の模式図、および抗力極曲線（C_D-C_L 線図）と現在点・最大 L/D 接線を同時に可視化し、翼設計の本質を直感的に学べます。

**Category:** 空気力学シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/lift-induced-drag.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/lift-induced-drag.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/lift-induced-drag.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/lift-induced-drag
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
