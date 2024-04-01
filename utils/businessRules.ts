import { MarketCapProps } from "@/types";
import { getQuotes } from "./api/getQuote";
import { getHistory } from "./api/getHistory";
import { getCollections } from "./api/getCollections";

export function calculateMarketCap(stocksData: MarketCapProps[]) {
  return stocksData.map(
    ({ ticker, price, sharesOutstanding }: MarketCapProps) => {
      // Assuming market cap calculation here is based on price and shares outstanding
      const marketCap = price * sharesOutstanding;
      return { ticker, marketCap };
    }
  );
}

export async function getFinancialData(collection: string) {
  const collections = await getCollections(collection);

  const results = await Promise.all(
    collections.map(async (collectionItem: any) => {
      const [history] = await Promise.all([getHistory(collectionItem.symbol)]);

      return {
        ticker: collectionItem.symbol,
        price: history, // Assuming getQuotes returns an object with price property
        sharesOutstanding: parseFloat(collectionItem.sharesOutstanding), // Parse sharesOutstanding to number
      };
    })
  );

  return calculateMarketCap(results);
}
