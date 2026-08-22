import type { Position } from "./position";

export type SettlementResult =
  | { status: "TARGET_HIT"; payout: number }
  | { status: "EXPIRED"; payout: number };

export function settle(position: Position, stoF: number): SettlementResult {
  const hit = position.side === "LONG"
    ? stoF >= position.target
    : stoF <= position.target;

  if (hit) {
    return { status: "TARGET_HIT", payout: position.stake };
  }

  return { status: "EXPIRED", payout: 0 };
}
