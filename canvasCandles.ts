import type { ChartCandle } from "./candleTypes";

export type CandleViewport = {
  width: number;
  height: number;
  start: number;
  end: number;
};

export function drawCandles(
  ctx: CanvasRenderingContext2D,
  candles: ChartCandle[],
  viewport: CandleViewport
): void {
  ctx.clearRect(0, 0, viewport.width, viewport.height);
  if (!candles.length) return;

  const visible = candles.slice(viewport.start, viewport.end);
  const highs = visible.map(c => c.high);
  const lows = visible.map(c => c.low);
  const max = Math.max(...highs);
  const min = Math.min(...lows);
  const range = Math.max(max - min, 0.000001);
  const step = viewport.width / Math.max(visible.length, 1);
  const bodyWidth = Math.max(2, step * 0.65);

  const y = (price: number) =>
    viewport.height - ((price - min) / range) * viewport.height;

  visible.forEach((candle, i) => {
    const x = i * step + step / 2;
    const rising = candle.close >= candle.open;
    const top = y(Math.max(candle.open, candle.close));
    const bottom = y(Math.min(candle.open, candle.close));

    ctx.beginPath();
    ctx.moveTo(x, y(candle.high));
    ctx.lineTo(x, y(candle.low));
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(x - bodyWidth / 2, top, bodyWidth, Math.max(1, bottom - top));
    if (rising) ctx.stroke();
    else ctx.fill();
  });
}
