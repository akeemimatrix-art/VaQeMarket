from statistics import mean, stdev

def weighted_average(values):
    if not values:
        return 0.0
    total_weight = sum(weight for _, weight in values)
    return sum(value * weight for value, weight in values) / total_weight if total_weight else 0.0

def remove_outliers(values, stddev_limit=2.5):
    if len(values) < 3:
        return values
    numbers = [value for value, _ in values]
    deviation = stdev(numbers)
    if deviation == 0:
        return values
    center = mean(numbers)
    low = center - stddev_limit * deviation
    high = center + stddev_limit * deviation
    return [item for item in values if low <= item[0] <= high]

def calculate_consensus(measurements, stddev_limit=2.5):
    uptime = remove_outliers([(m.uptime, m.node_weight) for m in measurements], stddev_limit)
    latency = remove_outliers([(m.latency_ms, m.node_weight) for m in measurements], stddev_limit)
    errors = remove_outliers([(m.error_rate, m.node_weight) for m in measurements], stddev_limit)
    return {
        "uptime": weighted_average(uptime),
        "latency": weighted_average(latency),
        "error_rate": weighted_average(errors),
        "accepted_nodes": len(uptime),
        "total_nodes": len(measurements),
    }
