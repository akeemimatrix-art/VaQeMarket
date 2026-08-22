import type { Order } from "../types/market";

export interface Match {
  longOrder: Order;
  shortOrder: Order;
  matchedStake: number;
}

export function matchOrders(longOrders: Order[], shortOrders: Order[]): Match[] {
  const matches: Match[] = [];
  for (const long of longOrders) {
    for (const short of shortOrders) {
      if (long.symbol !== short.symbol) continue;
      const matchedStake = Math.min(long.stake, short.stake);
      if (matchedStake > 0) {
        matches.push({ longOrder: long, shortOrder: short, matchedStake });
        break;
      }
    }
  }
  return matches;
}
