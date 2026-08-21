export class MarketEngineError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MarketEngineError";
  }
}

export class InvalidOrderError extends MarketEngineError {}
export class InsufficientLiquidityError extends MarketEngineError {}
export class InvalidPriceError extends MarketEngineError {}
