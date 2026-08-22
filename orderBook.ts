export type Side = "BUY" | "SELL";

export type LimitOrder = {
  id: string;
  side: Side;
  price: number;
  quantity: number;
  createdAt: number;
};

export class OrderBook {
  private bids: LimitOrder[] = [];
  private asks: LimitOrder[] = [];

  add(order: LimitOrder): void {
    if (order.price <= 0 || order.quantity <= 0) {
      throw new Error("Order price and quantity must be positive.");
    }
    const book = order.side === "BUY" ? this.bids : this.asks;
    book.push({ ...order });
    this.sort();
  }

  bestBid(): LimitOrder | null {
    return this.bids[0] ? { ...this.bids[0] } : null;
  }

  bestAsk(): LimitOrder | null {
    return this.asks[0] ? { ...this.asks[0] } : null;
  }

  private sort(): void {
    this.bids.sort((a, b) => b.price - a.price || a.createdAt - b.createdAt);
    this.asks.sort((a, b) => a.price - b.price || a.createdAt - b.createdAt);
  }
}
