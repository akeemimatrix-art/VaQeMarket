import type { Side } from "../types/market";

export interface Position {
  id: string;
  symbol: string;
  side: Side;
  stake: number;
  target: number;
  entry: number;
  expiresAt: number;
}

export function isExpired(position: Position, now = Date.now()): boolean {
  return now >= position.expiresAt;
}
