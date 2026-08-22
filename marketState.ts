import type { MarketState } from "../types/market";

export class MarketStateStore {
  private state: MarketState;

  constructor(symbol = "STO") {
    this.state = {
      symbol,
      stoF: 0,
      stoM: 0,
      updatedAt: Date.now(),
    };
  }

  updateFundamental(stoF: number) {
    this.state.stoF = stoF;
    this.state.updatedAt = Date.now();
  }

  updateMarket(stoM: number) {
    this.state.stoM = stoM;
    this.state.updatedAt = Date.now();
  }

  get() {
    return { ...this.state };
  }
}
