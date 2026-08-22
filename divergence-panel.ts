import {divergencePct} from "./dual-series";
export function divergenceLabel(stoF:number,stoM:number){
  const d=divergencePct(stoF,stoM);
  return `${d>=0?"+":""}${d.toFixed(2)}%`;
}
