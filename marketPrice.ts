import type { Trade } from './orderBook';
export type MarketPriceState={last:number;previous:number;change:number;timestampMs:number};
export function applyTrade(state:MarketPriceState|undefined,trade:Trade):MarketPriceState{const previous=state?.last??trade.price;return{last:trade.price,previous,change:trade.price-previous,timestampMs:trade.timestampMs};}
