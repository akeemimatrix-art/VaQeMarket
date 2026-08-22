import { Order, Match } from "./types";
import { OrderBook } from "./performanceOrderBook";
import { InsufficientLiquidityError } from "./errors";

export class MatchingEngine {
  constructor(private readonly book: OrderBook) {}

  match(symbol: string): Match | null {
    const long = this.book.longs().find((o) => o.symbol === symbol);
    const short = this.book.shorts().find((o) => o.symbol === symbol);

    if (!long || !short) return null;

    const stake = Math.min(long.stake, short.stake);

    if (stake <= 0) {
      throw new InsufficientLiquidityError("No matchable stake.");
    }

    const longPrice = long.price ?? 0;
    const shortPrice = short.price ?? 0;
    const executionPrice =
      longPrice && shortPrice ? (longPrice + shortPrice) / 2 : 0;

    this.book.remove(long.id, "LONG");
    this.book.remove(short.id, "SHORT");

    return {
      id: crypto.randomUUID(),
      symbol,
      longOrderId: long.id,
      shortOrderId: short.id,
      stake,
      executionPrice,
      matchedAt: Date.now(),
    };
  }
}
