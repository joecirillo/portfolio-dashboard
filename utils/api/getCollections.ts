export async function getCollections(collection: string) {
  try {
    const response = await fetch(
      `https://mboum.com/api/v1/co/collections/?list=${collection}&start=1&apikey=demo`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch collections data");
    }
    const result = await response.json();
    const stocks = result.data.quotes.map(
      (stock: {
        displayName: string;
        sharesOutstanding: string;
        symbol: string;
      }) => ({
        displayName: stock.displayName,
        sharesOutstanding: stock.sharesOutstanding,
        symbol: stock.symbol,
      })
    );
    console.log(
      stocks.map(
        (stock: { displayName: string; symbol: string }) =>
          stock.symbol + " " + stock.displayName
      )
    );
    console.log("Stocks: " + stocks);
    console.log(result);
  } catch (error) {
    console.error("Error fetching collections data: " + error);
  }
}
