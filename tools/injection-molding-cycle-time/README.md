# 射出成形サイクル時間 最適化シミュレーター

樹脂部品の射出成形における 1ショットあたりの所要時間を「充填＋冷却＋可塑化＋離型」に分解し、Ballman-Shusman式で冷却時間を予測します。肉厚・金型温度・キャビティ数を動かすと、1時間あたり生産数と部品単価がリアルタイムに更新されます。

**Category:** 成形プロセス・量産設計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/injection-molding-cycle-time.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/injection-molding-cycle-time.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/injection-molding-cycle-time.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/injection-molding-cycle-time
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
