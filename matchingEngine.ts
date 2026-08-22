import { OrderBook, type LimitOrder } from "./orderBook";

export type Fill = {
  makerOrderId: string;
  takerOrderId: string;
  price: number;
  quantity: number;
};

export class MatchingEngine {
  constructor(private readonly book = new OrderBook()) {}

  submit(order: LimitOrder): Fill | null {
    if (order.side === "BUY") {
      const ask = this.book.bestAsk();
      if (ask && order.price >= ask.price) {
        return {
          makerOrderId: ask.id,
          takerOrderId: order.id,
          price: ask.price,
          quantity: Math.min(order.quantity, ask.quantity),
        };
      }
    } else {
      const bid = this.book.bestBid();
      if (bid && order.price <= bid.price) {
        return {
          makerOrderId: bid.id,
          takerOrderId: order.id,
          price: bid.price,
          quantity: Math.min(order.quantity, bid.quantity),
        };
      }
    }

    this.book.add(order);
    return null;
  }
}
