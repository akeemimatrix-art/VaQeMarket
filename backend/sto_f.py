from .telemetry import calculate_metric_scores

def calculate_sto_f(uptime, latency_ms, error_rate, baseline_latency_ms=200.0):
    scores = calculate_metric_scores(uptime, latency_ms, error_rate, baseline_latency_ms)
    value = (
        0.50 * scores["uptime_score"]
        + 0.30 * scores["latency_score"]
        + 0.20 * scores["incident_score"]
    )
    return round(max(0.0, min(100.0, value)), 4)
