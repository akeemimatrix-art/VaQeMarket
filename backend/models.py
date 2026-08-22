from dataclasses import dataclass
from datetime import datetime
from typing import Optional

@dataclass
class TelemetryMeasurement:
    node_id: str
    target: str
    timestamp: datetime
    uptime: float
    latency_ms: float
    error_rate: float
    region: str
    node_weight: float
    commit_hash: Optional[str] = None

@dataclass
class Candle:
    timestamp: datetime
    open: float
    high: float
    low: float
    close: float
    volume: float = 0.0
