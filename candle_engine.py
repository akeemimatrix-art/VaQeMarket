from datetime import datetime

class CandleEngine:
    def __init__(self):
        self.candles = {}

    def _bucket(self, timestamp, seconds):
        epoch = int(timestamp.timestamp())
        return datetime.fromtimestamp((epoch // seconds) * seconds)

    def update(self, timestamp, price, timeframe_seconds):
        bucket = self._bucket(timestamp, timeframe_seconds)
        key = (timeframe_seconds, bucket)

        if key not in self.candles:
            self.candles[key] = {
                "timestamp": bucket,
                "open": price,
                "high": price,
                "low": price,
                "close": price,
                "volume": 0.0,
            }
        else:
            c = self.candles[key]
            c["high"] = max(c["high"], price)
            c["low"] = min(c["low"], price)
            c["close"] = price

        return self.candles[key]

    def get_candles(self, timeframe_seconds):
        return sorted(
            [c for (tf, _), c in self.candles.items() if tf == timeframe_seconds],
            key=lambda c: c["timestamp"],
        )
