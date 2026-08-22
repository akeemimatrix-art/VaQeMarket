import {SeriesPoint} from "./dual-series";
export class STOFSeries {
  private points:SeriesPoint[]=[];
  push(point:SeriesPoint){this.points.push(point); if(this.points.length>5000)this.points.shift();}
  all(){return [...this.points];}
}
