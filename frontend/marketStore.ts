export type MarketSide = "LONG" | "SHORT";
export type MarketSnapshot = { symbol: string; fundamental: number; market: number; timestamp: number };
export type PositionDraft = { symbol: string; side: MarketSide; stakeUsdc: number; target: number; durationSeconds: number };

let snapshot: MarketSnapshot = { symbol: "STO", fundamental: 0, market: 0, timestamp: 0 };
export const getMarketSnapshot = () => snapshot;
export function setMarketSnapshot(next: MarketSnapshot) {
  snapshot = { ...next, fundamental: clamp(next.fundamental, 0, 100), market: clamp(next.market, 0, 100) };
}
export function validatePositionDraft(p: PositionDraft) {
  if (!p.symbol.trim()) throw new Error("Symbol is required.");
  if (!Number.isFinite(p.stakeUsdc) || p.stakeUsdc <= 0) throw new Error("Stake must be greater than zero.");
  if (!Number.isFinite(p.target) || p.target < 0 || p.target > 100) throw new Error("Target must be between 0 and 100.");
  if (!Number.isInteger(p.durationSeconds) || p.durationSeconds <= 0) throw new Error("Duration must be positive.");
}
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
