export type Candle = { openTime:number; closeTime:number; open:number; high:number; low:number; close:number; volume:number };
export class CandleBuilder {
  private current?: Candle;
  constructor(private readonly intervalMs:number){ if(!Number.isInteger(intervalMs)||intervalMs<=0) throw new Error('intervalMs must be positive'); }
  update(price:number,timestampMs:number,volume=0):Candle{
    const openTime=Math.floor(timestampMs/this.intervalMs)*this.intervalMs;
    if(!this.current||this.current.openTime!==openTime){ this.current={openTime,closeTime:openTime+this.intervalMs,open:price,high:price,low:price,close:price,volume:Math.max(0,volume)}; return {...this.current}; }
    this.current.high=Math.max(this.current.high,price); this.current.low=Math.min(this.current.low,price); this.current.close=price; this.current.volume+=Math.max(0,volume); return {...this.current};
  }
  getCurrent(){ return this.current?{...this.current}:undefined; }
}
