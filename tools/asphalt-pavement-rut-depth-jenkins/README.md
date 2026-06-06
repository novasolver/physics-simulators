# アスファルト舗装 わだち掘れ予測 — Jenkins 式 (LRRB 99-31)

アスファルト舗装の「わだち掘れ（流動わだち）」を Jenkins 経験式で予測するシミュレーターです。混合物・表層厚・交通量・路面温度・タイヤ圧を変えると、累積 ESAL とわだち深さ、寿命、必要オーバーレイ厚がリアルタイムで分かります。

**Category:** 道路舗装・耐久

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/asphalt-pavement-rut-depth-jenkins.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/asphalt-pavement-rut-depth-jenkins.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/asphalt-pavement-rut-depth-jenkins.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/asphalt-pavement-rut-depth-jenkins
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
