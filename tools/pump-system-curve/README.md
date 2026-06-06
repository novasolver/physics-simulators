# ポンプ動作点 シミュレーター — ポンプ曲線とシステム曲線の交点

ポンプ性能曲線 H = H0 − kp·Q² と配管側のシステム曲線 H = H_static + ks·Q² を同じグラフに重ね、その交点が運転点。揚程や抵抗をスライダーで動かすたびに流量 Q・揚程 H・水力動力・軸動力が即更新されるので、ポンプ選定の感覚が掴めます。

**Category:** 流体機械シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/pump-system-curve.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/pump-system-curve.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/pump-system-curve.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/pump-system-curve
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
