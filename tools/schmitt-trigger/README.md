# シュミットトリガ シミュレーター

正帰還で2つのしきい値（ヒステリシス）を持たせた非反転シュミットトリガを設計するツールです。抵抗 R1・R2 と飽和電圧を変えると、上側・下側しきい値、ヒステリシス幅、ノイズマージンがリアルタイムで分かり、ノイズで誤動作しないコンパレータ回路を探せます。

**Category:** 電子回路

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/schmitt-trigger.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/schmitt-trigger.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/schmitt-trigger.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/schmitt-trigger
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
