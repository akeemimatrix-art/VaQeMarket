export type Side="LONG"|"SHORT";
export type ContractStatus="OPEN"|"TARGET_HIT"|"EXPIRED"|"CASHED_OUT";
export type PerformanceContract={id:string;trader:string;symbol:string;side:Side;stakeUsdc:number;target:number;openedAtMs:number;expiresAtMs:number;status:ContractStatus};
export type Settlement={contractId:string;status:Exclude<ContractStatus,"OPEN">;payoutUsdc:number;feeUsdc:number;settledAtMs:number};
