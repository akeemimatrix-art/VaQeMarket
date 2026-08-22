export type MarketState={
  symbol:string; stoF:number; stoM:number; timestamp:number;
  status:"LIVE"|"PAUSED"|"SETTLING";
};
export const initialMarketState:MarketState={
  symbol:"STO",stoF:80,stoM:80,timestamp:Date.now(),status:"LIVE"
};
