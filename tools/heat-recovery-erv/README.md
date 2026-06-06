# 全熱交換器（ERV）効率シミュレーター

換気で捨てる室内空気の「熱」と「湿気」を、入ってくる外気に移して再利用する全熱交換器（ERV）の設計ツールです。外気条件・風量・顕熱効率・潜熱効率を変えると、給気の温度と湿度、回収できる熱量、空調負荷の削減率がリアルタイムで分かります。

**Category:** 空調・HVAC

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/heat-recovery-erv.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/heat-recovery-erv.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/heat-recovery-erv.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/heat-recovery-erv
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
