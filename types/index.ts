export interface MarketCapProps {
  ticker: string;
  price: number;
  sharesOutstanding: number;
}

export interface PortfolioPieChartProps {
  name: string;
  value: number;
}

export interface MarketCapCalculationsPropsArray {
  caps: PortfolioPieChartProps[];
}
