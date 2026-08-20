export class VaQeError extends Error {
  constructor(message: string, public readonly code: string) {
    super(message);
    this.name = "VaQeError";
  }
}

export const Errors = {
  INVALID_INDEX: "INVALID_INDEX",
  INVALID_STAKE: "INVALID_STAKE",
  INVALID_DURATION: "INVALID_DURATION",
  MARKET_CLOSED: "MARKET_CLOSED",
  ORACLE_UNAVAILABLE: "ORACLE_UNAVAILABLE",
} as const;
