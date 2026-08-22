export type Side = "LONG" | "SHORT";

export interface Candle {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface MarketState {
  symbol: string;
  stoF: number;
  stoM: number;
  updatedAt: number;
}

export interface Order {
  id: string;
  symbol: string;
  side: Side;
  stake: number;
  target: number;
  durationSeconds: number;
  createdAt: number;
}
