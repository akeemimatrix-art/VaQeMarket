import { PerformanceContract } from "./contracts";

export interface SettlementResult {
  contractId: string;
  outcome: "WON" | "LOST" | "CASHED_OUT";
  payout: number;
}

export function settleAtExpiry(
  contract: PerformanceContract,
  finalStoF: number,
): SettlementResult {
  const won =
    contract.side === "LONG"
      ? finalStoF >= contract.target
      : finalStoF <= contract.target;

  return {
    contractId: contract.id,
    outcome: won ? "WON" : "LOST",
    payout: won ? contract.stake : 0,
  };
}

export function cashOut(
  contract: PerformanceContract,
  now: number,
): SettlementResult {
  const remaining = Math.max(0, contract.expiresAt - now);
  const duration = Math.max(1, contract.expiresAt - contract.openedAt);
  const payout = contract.stake * (remaining / duration);

  return {
    contractId: contract.id,
    outcome: "CASHED_OUT",
    payout,
  };
}
