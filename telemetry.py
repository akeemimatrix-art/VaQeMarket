def uptime_to_score(uptime: float) -> float:
    return max(0.0, min(100.0, uptime))

def latency_to_score(latency_ms: float, baseline_ms: float = 200.0) -> float:
    if latency_ms <= 0:
        return 100.0
    score = 100.0 * baseline_ms / max(latency_ms, baseline_ms)
    return max(0.0, min(100.0, score))

def error_rate_to_score(error_rate: float) -> float:
    return 100.0 - max(0.0, min(100.0, error_rate))

def calculate_metric_scores(uptime, latency_ms, error_rate, baseline_latency_ms=200.0):
    return {
        "uptime_score": uptime_to_score(uptime),
        "latency_score": latency_to_score(latency_ms, baseline_latency_ms),
        "incident_score": error_rate_to_score(error_rate),
    }
