export type DecayConfig={protocolFeeRate:number};
export function remainingStake(stake:number,opened:number,expires:number,now:number){if(expires<=opened)return 0;const elapsed=Math.max(0,now-opened),duration=expires-opened,ratio=Math.max(0,1-elapsed/duration);return stake*ratio;}
export function earlyExitPayout(stake:number,opened:number,expires:number,now:number,config:DecayConfig){const gross=remainingStake(stake,opened,expires,now),fee=gross*config.protocolFeeRate;return{payoutUsdc:Math.max(0,gross-fee),feeUsdc:fee};}
