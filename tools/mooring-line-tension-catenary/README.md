# 海洋係留索 張力・懸垂線シミュレーター

FPSO・TLP・Spar・係留ブイなど海洋構造物の係留索を、懸垂線（catenary）理論で設計するツールです。水深・索長・水中重量・水平荷重・素材を変えると、索形状・フェアリード張力・安全率・必要索数がリアルタイムで分かり、API RP 2SK や DNV-OS-E301 を意識した妥当な係留パターンを探せます。

**Category:** 海洋工学・係留設計

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/mooring-line-tension-catenary.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/mooring-line-tension-catenary.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/mooring-line-tension-catenary.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/mooring-line-tension-catenary
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
