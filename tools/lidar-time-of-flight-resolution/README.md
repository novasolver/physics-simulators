# LiDAR Time-of-Flight 距離分解能シミュレーター

自動運転車・地理測量・ロボティクスで使われる Time-of-Flight (TOF) LiDAR の設計ツールです。レーザーパワー、パルス幅、受信帯域、波長、ターゲット反射率を変えると、距離分解能・SNR・受信電力・距離精度・最大非曖昧距離がリアルタイムで分かります。

**Category:** 自動運転・センサー

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/lidar-time-of-flight-resolution.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/lidar-time-of-flight-resolution.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/lidar-time-of-flight-resolution.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/lidar-time-of-flight-resolution
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
