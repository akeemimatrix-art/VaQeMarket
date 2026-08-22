import { CandleAggregator } from "./candleAggregator";
import { MarketStream } from "./marketStream";
import { OracleStream } from "./oracleStream";

export class RealtimeState {
  readonly oracle = new OracleStream();
  readonly market = new MarketStream();
  readonly candles = new CandleAggregator(60_000);

  constructor() {
    this.oracle.events.subscribe(p => this.candles.update(p.stream, p.value, p.timestampMs));
    this.market.events.subscribe(p => this.candles.update(p.stream, p.value, p.timestampMs));
  }

  snapshot() {
    return {
      stoFHistory: this.candles.history("STO-F"),
      stoMHistory: this.candles.history("STO-M"),
    };
  }
}
