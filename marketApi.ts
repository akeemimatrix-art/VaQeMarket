import type { MarketState, Order } from "../types/market";

export interface MarketApi {
  getMarket(symbol: string): Promise<MarketState>;
  submitOrder(order: Order): Promise<{ accepted: boolean; id: string }>;
}
