export type SeriesPoint={time:number; value:number};
export function divergence(f:number,m:number){return m-f;}
export function divergencePct(f:number,m:number){return f===0?0:((m-f)/f)*100;}
