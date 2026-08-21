export type Side='BID'|'ASK';
export type Order={id:string;trader:string;side:Side;price:number;quantity:number;timestampMs:number};
export type Trade={makerOrderId:string;takerOrderId:string;price:number;quantity:number;timestampMs:number};
export class OrderBook{private bids:Order[]=[];private asks:Order[]=[];
 add(order:Order):Trade[]{if(order.price<=0||order.quantity<=0)throw new Error('Invalid order');const trades:Trade[]=[];const opp=order.side==='BID'?this.asks:this.bids;let rem=order.quantity;while(rem>0&&opp.length){const best=opp[0];const crosses=order.side==='BID'?order.price>=best.price:order.price<=best.price;if(!crosses)break;const q=Math.min(rem,best.quantity);trades.push({makerOrderId:best.id,takerOrderId:order.id,price:best.price,quantity:q,timestampMs:order.timestampMs});rem-=q;best.quantity-=q;if(best.quantity===0)opp.shift();}if(rem>0){const book=order.side==='BID'?this.bids:this.asks;book.push({...order,quantity:rem});book.sort((a,b)=>order.side==='BID'?b.price-a.price||a.timestampMs-b.timestampMs:a.price-b.price||a.timestampMs-b.timestampMs);}return trades;}
 snapshot(){return{bids:this.bids.map(x=>({...x})),asks:this.asks.map(x=>({...x}))};}}
