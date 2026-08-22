import { EventBus } from "./eventBus";
import type { StreamPoint } from "./types";

export class OracleStream {
  readonly events = new EventBus<StreamPoint>();

  publishFundamental(value: number, timestampMs = Date.now()): void {
    if (value < 0 || value > 100) throw new Error("STO-F must be 0..100.");
    this.events.publish({ stream: "STO-F", value, timestampMs });
  }
}
