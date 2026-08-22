export type StreamName = "STO-F" | "STO-M";

export type StreamPoint = {
  stream: StreamName;
  value: number;
  timestampMs: number;
};

export type Candle = {
  stream: StreamName;
  openTime: number;
  closeTime: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};
