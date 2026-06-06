# EV 急速充電 C レート・温度・劣化シミュレーター

電気自動車の急速充電（DCFC）について、化学組成・容量・C レート・熱管理方式を変えながら、充電時間とセル温度、推定サイクル寿命、年間容量低下をリアルタイムに見積もります。Tesla Supercharger、CHAdeMO、CCS、CATL Shenxing など、急速充電と寿命のトレードオフを体感できます。

**Category:** EV・急速充電・寿命

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/ev-fast-charge-c-rate-temperature.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/ev-fast-charge-c-rate-temperature.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/ev-fast-charge-c-rate-temperature.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/ev-fast-charge-c-rate-temperature
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
