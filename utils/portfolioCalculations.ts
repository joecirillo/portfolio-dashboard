import { MarketCapProps } from "@/types";
import { getQuotes } from "./api/getQuote";
import { getHistory } from "./api/getHistory";
import { getCollections } from "./api/getCollections";
import { collections } from "@/constants";
import { getMarketCapData } from "./businessRules";

export async function getHistoricalCollectionQuotes(collection: string) {
  const collections = await getCollections(collection);

  const results = await Promise.all(
    collections.map(async (collectionItem: any) => {
      const history = await getHistory(collectionItem.name);

      return {
        name: collectionItem.name,
        price: history,
        sharesOutstanding: collectionItem.sharesOutstanding,
      };
    })
  );
  return results;
}

export async function getHistoricalMarketCapData() {
  try {
    const data: { [key: string]: { name: string; price: number }[] } = {};
    for (const collection of collections) {
      const collectionData = await getHistoricalCollectionQuotes(collection);
      data[collection] = collectionData;
    }

    return data;
  } catch (error) {
    console.error("Error fetching market cap data:", error);
  }
}

export async function calculateStockReturns2() {
  const yearStart = await getHistoricalMarketCapData();
  console.log("_________________Year Start: ____________");
  console.log(yearStart);
  const yearToDate = await getMarketCapData();

  if (!yearStart || !yearToDate) {
    console.log("Error: Unable to fetch data.");
    return; // Exit the function if data is not available
  }

  const returns: any = {}; // Object to store the returns for each collection

  collections.forEach((collection: any) => {
    returns[collection] = []; // Initialize an array to store returns for each stock in the collection

    yearStart[collection].forEach((stock: any, index: number) => {
      const startValue = stock.price; // Value at time 0
      const toDateValue = yearToDate[collection][index].price; // Value at time 1

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

export async function calculatePortfolioHoldings2() {
  const beginningHoldings = await getHistoricalMarketCapData();

  // Loop through each category in the beginningHoldings object
  for (const category in beginningHoldings) {
    if (beginningHoldings.hasOwnProperty(category)) {
      const stocks = beginningHoldings[category];
      // Calculate the total value of all stocks in the category
      const totalValue = stocks.reduce((sum, stock) => sum + stock.price, 0);
      // Calculate the holdings for each stock relative to the total value
      const holdings = stocks.map((stock) => ({
        name: stock.name,
        price: totalValue !== 0 ? stock.price / totalValue : 0, // Avoid division by zero
      }));
      // Update the category with the calculated holdings
      beginningHoldings[category] = holdings;
    }
  }

  return beginningHoldings;
}

export async function calculatePortfolioReturnsData2() {
  // Calculate portfolio returns
  const portfolioReturns = await calculateStockReturns2();

  // Calculate portfolio holdings
  const portfolioHoldings = await calculatePortfolioHoldings2();

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
        const newValue = (1 + stock.changeInValue) * holding!.price;

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
