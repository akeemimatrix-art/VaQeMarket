export type Side = "LONG" | "SHORT";
export type OrderType = "MARKET" | "LIMIT";

export interface MarketSnapshot {
  symbol: string;
  stoF: number;
  stoM: number;
  timestamp: number;
}

export interface Order {
  id: string;
  traderId: string;
  symbol: string;
  side: Side;
  type: OrderType;
  price?: number;
  stake: number;
  durationSeconds: number;
  createdAt: number;
}

export interface Match {
  id: string;
  symbol: string;
  longOrderId: string;
  shortOrderId: string;
  stake: number;
  executionPrice: number;
  matchedAt: number;
}

export interface Divergence {
  absolute: number;
  percentage: number;
  premium: "PREMIUM" | "DISCOUNT" | "PAR";
}
