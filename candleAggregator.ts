import type { Candle, StreamName } from "./types";

export class CandleAggregator {
  private candles = new Map<string, Candle>();

  constructor(private readonly intervalMs = 60_000) {}

  update(stream: StreamName, value: number, timestampMs: number, volume = 0): Candle {
    if (!Number.isFinite(value)) throw new Error("Invalid stream value.");
    const openTime = Math.floor(timestampMs / this.intervalMs) * this.intervalMs;
    const key = `${stream}:${openTime}`;
    const existing = this.candles.get(key);

    if (!existing) {
      const candle: Candle = {
        stream, openTime, closeTime: openTime + this.intervalMs,
        open: value, high: value, low: value, close: value,
        volume: Math.max(0, volume),
      };
      this.candles.set(key, candle);
      return { ...candle };
    }

    existing.high = Math.max(existing.high, value);
    existing.low = Math.min(existing.low, value);
    existing.close = value;
    existing.volume += Math.max(0, volume);
    return { ...existing };
  }

  history(stream: StreamName, limit = 200): Candle[] {
    return [...this.candles.values()]
      .filter(c => c.stream === stream)
      .sort((a, b) => a.openTime - b.openTime)
      .slice(-limit)
      .map(c => ({ ...c }));
  }
}
