export type MarketSnapshot = {
  stoF: number;
  stoM: number;
  divergence: number;
  timestamp: number;
};

export function createSnapshot(stoF: number, stoM: number): MarketSnapshot {
  return {
    stoF,
    stoM,
    divergence: stoM - stoF,
    timestamp: Date.now(),
  };
}
