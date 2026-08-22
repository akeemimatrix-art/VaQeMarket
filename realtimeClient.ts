export type StreamCandle = {
  stream: "STO-F" | "STO-M";
  openTime: number;
  closeTime: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export type MarketSnapshot = {
  stoFHistory: StreamCandle[];
  stoMHistory: StreamCandle[];
};

export async function fetchMarketSnapshot(baseUrl: string): Promise<MarketSnapshot> {
  const response = await fetch(`${baseUrl}/api/market/snapshot`);
  if (!response.ok) throw new Error(`Market API returned ${response.status}`);
  return response.json() as Promise<MarketSnapshot>;
}
