# ウィーン橋発振回路 シミュレーター — 正弦波発振の条件

抵抗 R、容量 C、増幅器ゲイン A、電源電圧 V_supply からウィーン橋発振回路の発振周波数 f₀=1/(2πRC)、周波数選択帰還比 β、持続発振条件 A·β=1 をリアルタイムに計算し、回路模式図と出力波形を可視化します。A を 3 より小さくすれば減衰、3 ちょうどで持続正弦波、3 を超えれば飽和（クリッピング）と、3 つのレジームの境界をスライダーで体感しながら、計測機器や信号源で広く使われる低周波 RC 発振器の動作原理を直感的に学べます。

**Category:** アナログ電子回路シミュレーター

## Live demos

- 🇯🇵 [日本語](https://novasolver.jp/tools/wien-bridge-oscillator.html)
- 🇺🇸 [English](https://novasolver.jp/en/tools/wien-bridge-oscillator.html)
- 🇨🇳 [中文](https://novasolver.jp/zh/tools/wien-bridge-oscillator.html)

## Run locally

```bash
git clone https://github.com/novasolver/physics-simulators
cd physics-simulators/tools/wien-bridge-oscillator
python -m http.server 8000
# open http://localhost:8000
```

## License

[MIT](../../LICENSE)
