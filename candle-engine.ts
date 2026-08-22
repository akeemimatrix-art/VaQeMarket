export type Candle = { time:number; open:number; high:number; low:number; close:number; volume:number };
export function makeCandle(time:number, values:number[], volume=0): Candle {
  const open=values[0], close=values[values.length-1];
  return {time,open,close,high:Math.max(...values),low:Math.min(...values),volume};
}
