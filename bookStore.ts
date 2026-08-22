import type { OrderBookSnapshot } from "./orderBookTypes";

export class BookStore {
  private snapshot: OrderBookSnapshot = {
    bids: [],
    asks: [],
    timestamp: 0,
  };

  set(snapshot: OrderBookSnapshot): void {
    this.snapshot = {
      bids: [...snapshot.bids],
      asks: [...snapshot.asks],
      timestamp: snapshot.timestamp,
    };
  }

  get(): OrderBookSnapshot {
    return {
      bids: [...this.snapshot.bids],
      asks: [...this.snapshot.asks],
      timestamp: this.snapshot.timestamp,
    };
  }
}
