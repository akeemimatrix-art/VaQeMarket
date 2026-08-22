export type BookLevel = {
  price: number;
  quantity: number;
};

export type OrderBookSnapshot = {
  bids: BookLevel[];
  asks: BookLevel[];
  timestamp: number;
};
