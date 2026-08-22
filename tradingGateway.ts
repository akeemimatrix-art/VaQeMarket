import { randomUUID } from "node:crypto";
import { MatchingEngine } from "./matchingEngine";
import type { LimitOrder, Side } from "./orderBook";

export type NewOrder = {
  side: Side;
  price: number;
  quantity: number;
};

export class TradingGateway {
  constructor(private readonly engine = new MatchingEngine()) {}

  placeOrder(input: NewOrder) {
    const order: LimitOrder = {
      id: randomUUID(),
      side: input.side,
      price: input.price,
      quantity: input.quantity,
      createdAt: Date.now(),
    };

    const fill = this.engine.submit(order);
    return { orderId: order.id, fill };
  }
}
