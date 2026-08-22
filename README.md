# VaQeMarket Market Visualization Layer

Next application layer: STO-F measured reality + STO-M market price visualization.

## Key rule
STO-F is produced by the oracle/data layer. STO-M is produced by the market engine.
Neither feed is allowed to rewrite the other.

This layer prepares the terminal for realtime dual-series candles, divergence,
order-book display, and performance-contract trading.
