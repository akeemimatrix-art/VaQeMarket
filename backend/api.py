from fastapi import FastAPI
from .sto_f import calculate_sto_f
from .candle_engine import CandleEngine

app = FastAPI(title="VaQeMarket Oracle API", version="0.1.0")
candle_engine = CandleEngine()

@app.get("/health")
def health():
    return {"status": "ok", "service": "vaqemarket-oracle"}

@app.get("/sto-f")
def sto_f():
    value = calculate_sto_f(99.8, 120, 0.2)
    return {"symbol": "STO-F", "value": value, "source": "oracle"}

@app.get("/sto-f/candles")
def sto_f_candles(timeframe: int = 60):
    return {
        "symbol": "STO-F",
        "timeframe": timeframe,
        "candles": candle_engine.get_candles(timeframe),
    }
