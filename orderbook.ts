import { Order, Side } from "./types";
import { InvalidOrderError } from "./errors";
import { MIN_STAKE_USDC, MAX_STAKE_USDC } from "./constants";

export class OrderBook {
  private readonly longOrders: Order[] = [];
  private readonly shortOrders: Order[] = [];

  add(order: Order): void {
    if (!order.id || !order.traderId || !order.symbol) {
      throw new InvalidOrderError("Order identity is required.");
    }

    if (order.stake < MIN_STAKE_USDC || order.stake > MAX_STAKE_USDC) {
      throw new InvalidOrderError("Stake is outside allowed limits.");
    }

    const book = order.side === "LONG" ? this.longOrders : this.shortOrders;
    book.push(order);
  }

  remove(orderId: string, side: Side): Order | undefined {
    const book = side === "LONG" ? this.longOrders : this.shortOrders;
    const index = book.findIndex((order) => order.id === orderId);
    if (index === -1) return undefined;
    return book.splice(index, 1)[0];
  }

  longs(): readonly Order[] {
    return this.longOrders;
  }

  shorts(): readonly Order[] {
    return this.shortOrders;
  }
}
