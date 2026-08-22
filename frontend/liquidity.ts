export type LiquidityState={availableUsdc:number;reservedUsdc:number};
export function reserveLiquidity(s:LiquidityState,amount:number):LiquidityState{if(amount<=0)throw new Error('Amount must be positive');if(amount>s.availableUsdc)throw new Error('Insufficient liquidity');return{availableUsdc:s.availableUsdc-amount,reservedUsdc:s.reservedUsdc+amount};}
export function utilization(s:LiquidityState){const total=s.availableUsdc+s.reservedUsdc;return total===0?0:s.reservedUsdc/total;}
