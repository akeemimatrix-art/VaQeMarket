# VaQeMarket Trading UI Layer

This layer adds the first market-facing realtime pieces:

- WebSocket message protocol
- Order book
- Matching engine
- Trading gateway
- Dual STO-F / STO-M candle store
- Realtime WebSocket client
- Dual-candle market panel
- STO-M order ticket

Important boundary:

STO-F is produced by the oracle/data layer and is never modified by market orders.
STO-M is produced by market activity and is never used to rewrite STO-F.

This is application infrastructure, not a production-ready exchange. Add authentication,
persistent storage, deterministic settlement, risk controls, rate limits, audit logging,
and legal/compliance controls before handling real funds.
