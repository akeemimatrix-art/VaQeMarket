import { Side } from "./types";

export interface PerformanceContract {
  id: string;
  symbol: string;
  traderId: string;
  side: Side;
  stake: number;
  target: number;
  openedAt: number;
  expiresAt: number;
  status: "OPEN" | "WON" | "LOST" | "CASHED_OUT";
}

export function createContract(input: Omit<PerformanceContract, "status">) {
  return {
    ...input,
    status: "OPEN" as const,
  };
}
