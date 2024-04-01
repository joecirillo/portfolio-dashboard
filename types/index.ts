export interface MarketCapProps {
  ticker: string;
  price: number;
  sharesOutstanding: number;
}

export interface MarketCapCalculationsProps {
  ticker: string;
  marketCap: number;
}

export interface MarketCapCalculationsPropsArray {
  caps: MarketCapCalculationsProps[];
}
