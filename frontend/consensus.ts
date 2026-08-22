/// <reference path="./node-crypto.d.ts" />
import { createHash } from "node:crypto";
import { filterOutliers } from "./outlierFilter";
import { NODE_WEIGHT, type OracleTick, type TelemetrySample } from "./types";
export function buildOracleTick(symbol:string,samples:TelemetrySample[],timestampMs=Date.now()):OracleTick{
 if(!samples.length)throw new Error("No telemetry samples.");
 const filtered=filterOutliers(samples.map(s=>s.latencyMs));
 const accepted=samples.filter(s=>filtered.accepted.includes(s.latencyMs));
 const value=weightedPerformance(accepted), confidence=accepted.length/samples.length;
 const sourceHash=createHash("sha256").update(JSON.stringify(accepted)).digest("hex");
 return{symbol,value,timestampMs,sampleCount:accepted.length,confidence,sourceHash};
}
function weightedPerformance(samples:TelemetrySample[]){let sum=0,total=0;for(const s of samples){const perf=score(s);const w=NODE_WEIGHT[s.role];sum+=perf*w;total+=w;}return total?sum/total:0;}
function score(s:TelemetrySample){const latency=100*Math.exp(-s.latencyMs/500),uptime=Math.max(0,Math.min(100,s.uptimePercent)),errors=Math.max(0,100-s.errorRatePercent*10);return Math.min(100,Math.max(0,.5*uptime+.3*latency+.2*errors));}
