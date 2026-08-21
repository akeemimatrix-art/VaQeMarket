export interface Candle {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export class CandleBuilder {
  private readonly candles = new Map<number, Candle>();

  update(timestamp: number, price: number, volume = 0): Candle {
    const bucket = Math.floor(timestamp / 60_000) * 60_000;
    const current = this.candles.get(bucket);

    if (!current) {
      const candle = {
        timestamp: bucket,
        open: price,
        high: price,
        low: price,
        close: price,
        volume,
      };
      this.candles.set(bucket, candle);
      return candle;
    }

    current.high = Math.max(current.high, price);
    current.low = Math.min(current.low, price);
    current.close = price;
    current.volume += volume;

    return current;
  }

  all(): Candle[] {
    return [...this.candles.values()].sort(
      (a, b) => a.timestamp - b.timestamp,
    );
  }
}
