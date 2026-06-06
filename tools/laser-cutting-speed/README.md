# レーザー切断速度の見積もりシミュレーター

板金加工のレーザー切断で「この出力・この板厚なら何 m/min で切れるか？」を、エネルギーバランス式から即座に見積もるツールです。出力・板厚・結合効率を動かすと、切断速度と1mあたりの所要時間がリアルタイムで更新され、加工条件の当たりづけや見積もりに使えます。

**Category:** 加工技術

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/laser-cutting-speed.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/laser-cutting-speed.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/laser-cutting-speed.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/laser-cutting-speed
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
