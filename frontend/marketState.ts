import {calculateDivergence,type Divergence} from './divergence';
import type {MarketPriceState} from './marketPrice';
export type MarketState={symbol:string;stoF:number;stoM:MarketPriceState;divergence:Divergence;updatedAtMs:number};
export function createMarketState(symbol:string,stoF:number,stoM:MarketPriceState):MarketState{return{symbol,stoF,stoM,divergence:calculateDivergence(stoM.last,stoF),updatedAtMs:stoM.timestampMs};}
export function updateFundamental(s:MarketState,stoF:number):MarketState{return{...s,stoF,divergence:calculateDivergence(s.stoM.last,stoF),updatedAtMs:Date.now()};}
