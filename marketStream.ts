import { EventBus } from "./eventBus";
import type { StreamPoint } from "./types";

export class MarketStream {
  readonly events = new EventBus<StreamPoint>();

  publishMarketPrice(value: number, timestampMs = Date.now()): void {
    if (!Number.isFinite(value) || value <= 0) throw new Error("Invalid STO-M.");
    this.events.publish({ stream: "STO-M", value, timestampMs });
  }
}
