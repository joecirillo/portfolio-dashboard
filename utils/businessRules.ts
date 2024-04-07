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
      }[];
    } = {};
    for (const collection of collections) {
      const collectionData = await getCollections(collection);
      console.log(collectionData);
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

export async function calculateStockReturns() {
  const yearStart = await getHistoricalMarketCapData();
  const yearToDate = await getMarketCapData();

  if (!yearStart || !yearToDate) {
    console.log("Error: Unable to fetch data.");
    return; // Exit the function if data is not available
  }

  const returns: any = {}; // Object to store the returns for each collection

  collections.forEach((collection: any) => {
    returns[collection] = []; // Initialize an array to store returns for each stock in the collection

    yearStart[collection].forEach((stock: any, index: number) => {
      const startValue = stock.value; // Value at time 0
      const toDateValue = yearToDate[collection][index].value; // Value at time 1

      // Calculate the decimal change in value
      const changeInValue = (toDateValue - startValue) / startValue;

      // Store the change in value for the stock
      returns[collection].push({
        name: stock.name,
        changeInValue: changeInValue,
      });
    });
  });

  return returns; // Return the object containing the decimal changes in value for each collection and stock
}

export async function calculatePortfolioHoldings() {
  const beginningHoldings = await getHistoricalMarketCapData();

  // Loop through each category in the beginningHoldings object
  for (const category in beginningHoldings) {
    if (beginningHoldings.hasOwnProperty(category)) {
      const stocks = beginningHoldings[category];
      // Calculate the total value of all stocks in the category
      const totalValue = stocks.reduce((sum, stock) => sum + stock.value, 0);
      // Calculate the holdings for each stock relative to the total value
      const holdings = stocks.map((stock) => ({
        name: stock.name,
        value: totalValue !== 0 ? stock.value / totalValue : 0, // Avoid division by zero
      }));
      // Update the category with the calculated holdings
      beginningHoldings[category] = holdings;
    }
  }

  return beginningHoldings;
}

export async function calculatePortfolioReturnsData() {
  // Calculate portfolio returns
  const portfolioReturns = await calculateStockReturns();
  console.log(portfolioReturns);

  // Calculate portfolio holdings
  const portfolioHoldings = await calculatePortfolioHoldings();
  console.log(portfolioHoldings);

  // Initialize an array to store the portfolio return data
  const data = [];

  // Loop through each portfolio in portfolioReturns
  for (const portfolio in portfolioReturns) {
    if (portfolioReturns.hasOwnProperty(portfolio)) {
      const stocks = portfolioReturns[portfolio];

      // Initialize total portfolio value
      let portfolioValue = 0;

      // Loop through each stock in the portfolio
      stocks.forEach((stock: any) => {
        // Find the corresponding holding for the stock
        const holding = portfolioHoldings![portfolio].find(
          (h) => h.name === stock.name
        );

        // Calculate the new value of the stock in the portfolio
        const newValue = (1 + stock.changeInValue) * holding!.value;

        // Add the new value to the total portfolio value
        portfolioValue += newValue;
      });

      // Calculate the portfolio return
      const portfolioReturn = portfolioValue - 1;

      // Push portfolio return data to the data array
      data.push({
        name: portfolio,
        return: portfolioReturn,
      });
    }
  }

  return data;
}
