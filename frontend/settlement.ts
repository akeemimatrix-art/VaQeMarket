import type { PerformanceContract, Settlement } from "./types";
import { earlyExitPayout } from "./timeDecay";
export function settleContract(c:PerformanceContract,fundamental:number,now:number,profitRate=.25,protocolFeeRate=.02):Settlement{
 if(c.status!=="OPEN")throw new Error("Contract is already settled.");
 const hit=c.side==="LONG"?fundamental>=c.target:fundamental<=c.target;
 if(hit&&now<=c.expiresAtMs){const profit=c.stakeUsdc*profitRate,fee=profit*protocolFeeRate;return{contractId:c.id,status:"TARGET_HIT",payoutUsdc:c.stakeUsdc+profit-fee,feeUsdc:fee,settledAtMs:now};}
 if(now>=c.expiresAtMs)return{contractId:c.id,status:"EXPIRED",payoutUsdc:0,feeUsdc:0,settledAtMs:now};
 const cash=earlyExitPayout(c.stakeUsdc,c.openedAtMs,c.expiresAtMs,now,{protocolFeeRate});return{contractId:c.id,status:"CASHED_OUT",payoutUsdc:cash.payoutUsdc,feeUsdc:cash.feeUsdc,settledAtMs:now};
}
