# 建物の熱損失シミュレーター

暖房した建物が冬の外気へ逃がす熱を計算するツールです。外皮の面積・断熱性能（U値）・室内外の温度差・換気回数を変えると、壁や窓を貫流して逃げる熱と、換気で出ていく熱がリアルタイムで分かり、省エネ設計や暖房負荷の概算に使えます。

**Category:** 建築環境工学

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/building-heat-loss.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/building-heat-loss.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/building-heat-loss.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/building-heat-loss
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
