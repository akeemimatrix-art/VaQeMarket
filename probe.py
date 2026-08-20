import time
import requests
from datetime import datetime
from .models import TelemetryMeasurement

def probe_http(node_id, target, region, node_weight=1.0, timeout=5.0):
    start = time.perf_counter()
    uptime = 0.0
    error_rate = 100.0

    try:
        response = requests.get(target, timeout=timeout)
        latency_ms = (time.perf_counter() - start) * 1000
        if response.ok:
            uptime = 100.0
            error_rate = 0.0
    except requests.RequestException:
        latency_ms = timeout * 1000

    return TelemetryMeasurement(
        node_id=node_id,
        target=target,
        timestamp=datetime.utcnow(),
        uptime=uptime,
        latency_ms=latency_ms,
        error_rate=error_rate,
        region=region,
        node_weight=node_weight,
    )
