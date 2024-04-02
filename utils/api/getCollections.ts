export async function getCollections(collection: string) {
  let startIndex;
  if (collection === "undervalued_large_caps") {
    startIndex = 1;
  } else {
    startIndex = 0;
  }
  try {
    const response = await fetch(
      `https://mboum.com/api/v1/co/collections/?apikey=demo&list=${collection}&start=${startIndex}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch collections data");
    }
    const result = await response.json();
    const stocks = result.data.quotes.map(
      (stock: {
        symbol: string;
        marketCap: number;
        sharesOutstanding: number;
      }) => ({
        name: stock.symbol,
        value: stock.marketCap,
        sharesOutstanding: stock.sharesOutstanding,
      })
    );

    return stocks;
  } catch (error) {
    console.error("Error fetching collections data: " + error);
  }
}
