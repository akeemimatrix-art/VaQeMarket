export type MarketState = {
  stoF: number | null;
  stoM: number | null;
  oracleStatus: "LIVE" | "PAUSED" | "DEGRADED";
  lastUpdate: number | null;
};

export const initialMarketState: MarketState = {
  stoF: null,
  stoM: null,
  oracleStatus: "PAUSED",
  lastUpdate: null,
};
