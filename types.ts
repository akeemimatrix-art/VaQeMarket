import type { MARKETS } from "./constants.js";

export type MarketSymbol = keyof typeof MARKETS;
export type NodeTier = "sentinel" | "validator" | "anchor";
export type Direction = "LONG" | "SHORT";

export interface FundamentalIndex {
  symbol: MarketSymbol;
  value: number;
  timestamp: number;
  sourceCount: number;
  confidence: number;
}

export interface MarketPrice {
  symbol: MarketSymbol;
  value: number;
  timestamp: number;
  bid: number;
  ask: number;
}

export interface Divergence {
  fundamental: number;
  market: number;
  absolute: number;
  percentage: number;
}

export interface Position {
  id: string;
  trader: string;
  symbol: MarketSymbol;
  direction: Direction;
  stakeUsdc: number;
  target: number;
  openedAt: number;
  expiresAt: number;
  status: "OPEN" | "SETTLED" | "CANCELLED";
}
