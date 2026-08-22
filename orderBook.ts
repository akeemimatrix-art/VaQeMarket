import type { Order, Side } from "../types/market";

export class OrderBook {
  private orders: Order[] = [];

  add(order: Order) {
    this.orders.push(order);
  }

  remove(id: string) {
    this.orders = this.orders.filter(order => order.id !== id);
  }

  bySide(side: Side) {
    return this.orders.filter(order => order.side === side);
  }

  snapshot() {
    return [...this.orders];
  }
}
