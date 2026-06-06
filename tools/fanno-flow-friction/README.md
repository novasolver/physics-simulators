# ファノー流れ（摩擦付管路）シミュレーター

断熱・等断面のパイプの中を流れる圧縮性ガスが、壁面摩擦だけでマッハ 1 に近づき「摩擦チョーク」する現象を可視化するツールです。入口マッハ数・管径・管長・摩擦係数を変えて、出口マッハ数と圧力比、チョークまでの余裕をリアルタイムで確認できます。

**Category:** 圧縮性流体

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/fanno-flow-friction.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/fanno-flow-friction.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/fanno-flow-friction.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/fanno-flow-friction
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
