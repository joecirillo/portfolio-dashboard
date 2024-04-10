import { MarketCapProps } from "@/types";
import { getQuotes } from "./api/getQuote";
import { getHistory } from "./api/getHistory";
import { getCollections } from "./api/getCollections";
import { collections } from "@/constants";

export function calculateMarketCap(stocksData: MarketCapProps[]) {
  return stocksData.map(
    ({ ticker, price, sharesOutstanding }: MarketCapProps) => {
      // Assuming market cap calculation here is based on price and shares outstanding
      const name = ticker;
      const value = price * sharesOutstanding;
      return { name, value };
    }
  );
}

export async function getFinancialData(collection: string) {
  const collections = await getCollections(collection);

  const results = await Promise.all(
    collections.map(async (collectionItem: any) => {
      const history = await getHistory(collectionItem.name);

      return {
        ticker: collectionItem.name,
        price: history, // Assuming getQuotes returns an object with price property
        sharesOutstanding: collectionItem.sharesOutstanding, // Parse sharesOutstanding to number
      };
    })
  );

  return calculateMarketCap(results);
}

export async function getMarketCapData() {
  try {
    const data: {
      [key: string]: {
        name: string;
        value: number;
        sharesOutstanding: number;
        price: number;
      }[];
    } = {};
    for (const collection of collections) {
      const collectionData = await getCollections(collection);
      data[collection] = collectionData;
    }

    return data;
  } catch (error) {
    console.error("Error fetching market cap data:", error);
  }
}

export async function getHistoricalMarketCapData() {
  try {
    const data: { [key: string]: { name: string; value: number }[] } = {};
    for (const collection of collections) {
      const collectionData = await getFinancialData(collection);
      data[collection] = collectionData;
    }

    return data;
  } catch (error) {
    console.error("Error fetching market cap data:", error);
  }
}
