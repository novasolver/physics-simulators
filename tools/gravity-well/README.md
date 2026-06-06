# 重力井戸シミュレーター

クリックで重力源を配置し、時空のゴム膜アナロジーでグリッドが歪む様子を体験できるシミュレーターです。テスト粒子が描く軌道から、一般相対論の直感的イメージを掴めます。加速度の計算にVerlet積分を採用し、発散を防ぐソフトニングパラメータも実装。2Dグリッドの変形を通じて、質量が時空を歪める様子を視覚的に学べます。

**Category:** 対話型シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/gravity-well.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/gravity-well.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/gravity-well.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/gravity-well
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
