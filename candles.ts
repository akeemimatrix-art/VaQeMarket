import type { Candle } from "../types/market";

export function nextCandle(previous: Candle, price: number, timestamp: number, volume: number): Candle {
  return {
    timestamp,
    open: previous.close,
    high: Math.max(previous.close, price),
    low: Math.min(previous.close, price),
    close: price,
    volume,
  };
}
