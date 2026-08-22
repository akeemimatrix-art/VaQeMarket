export type WsMessage =
  | { type: "snapshot"; stoF: number | null; stoM: number | null }
  | { type: "candle"; stream: "STO-F" | "STO-M"; candle: CandlePayload }
  | { type: "orderAccepted"; orderId: string }
  | { type: "error"; message: string };

export type CandlePayload = {
  openTime: number;
  closeTime: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export function encodeWsMessage(message: WsMessage): string {
  return JSON.stringify(message);
}
