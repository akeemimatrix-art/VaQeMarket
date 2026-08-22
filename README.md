# VaQeMarket Market Data Layer

Backend-oriented market-data primitives for VaQeMarket.

## Project Layout

- `backend/` contains the Python oracle API and market-data calculations.
- `frontend/` contains the TypeScript market-data and trading primitives.

- STO-F index points and candlestick aggregation
- STO-M order-book matching and last-trade price
- STO-F vs STO-M divergence
- position/open-interest limits
- builder liquidity reservation
- serializable market state

STO-F remains the independently measured fundamental index. STO-M remains the market price formed by orders and trades. The two are never merged into one oracle value.
