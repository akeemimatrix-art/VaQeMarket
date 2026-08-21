export type FilterResult={accepted:number[];rejected:number[];mean:number;standardDeviation:number};
export function filterOutliers(values:number[],sigmaLimit=2.5):FilterResult{
 if(!values.length)return{accepted:[],rejected:[],mean:0,standardDeviation:0};
 const mean=values.reduce((a,b)=>a+b,0)/values.length;
 const variance=values.reduce((a,v)=>a+(v-mean)**2,0)/values.length;
 const standardDeviation=Math.sqrt(variance);
 if(standardDeviation===0)return{accepted:[...values],rejected:[],mean,standardDeviation};
 const accepted:number[]=[],rejected:number[]=[];
 for(const v of values)(Math.abs(v-mean)<=sigmaLimit*standardDeviation?accepted:rejected).push(v);
 return{accepted,rejected,mean,standardDeviation};
}
