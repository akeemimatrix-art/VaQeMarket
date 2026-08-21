import type {MarketState} from './marketState';
export function serializeMarketState(s:MarketState){return JSON.stringify(s);}
export function deserializeMarketState(raw:string):MarketState{const v=JSON.parse(raw) as MarketState;if(!v||typeof v.symbol!=='string'||typeof v.stoF!=='number'||!v.stoM||typeof v.stoM.last!=='number')throw new Error('Malformed market state');return v;}
