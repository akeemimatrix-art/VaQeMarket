import type { ChartCandle } from "./candleTypes";

export class CandleStore {
  private data = new Map<"STO-F" | "STO-M", ChartCandle[]>();

  set(stream: "STO-F" | "STO-M", candles: ChartCandle[]): void {
    this.data.set(stream, [...candles]);
  }

  append(candle: ChartCandle): void {
    const list = this.data.get(candle.stream) ?? [];
    const last = list[list.length - 1];

    if (last && last.time === candle.time) list[list.length - 1] = candle;
    else list.push(candle);

    this.data.set(candle.stream, list.slice(-1000));
  }

  get(stream: "STO-F" | "STO-M"): ChartCandle[] {
    return [...(this.data.get(stream) ?? [])];
  }
}
