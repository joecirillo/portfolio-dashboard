import { MarketCapProps } from "@/types";

export function calculateMarketCap(stocksData: MarketCapProps[]) {
  return stocksData.map(
    ({ ticker, price, sharesOutstanding }: MarketCapProps) => {
      // Assuming market cap calculation here is based on price and shares outstanding
      const marketCap = price * sharesOutstanding;
      return { ticker, marketCap };
    }
  );
}
