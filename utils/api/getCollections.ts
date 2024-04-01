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
      (stock: { symbol: string; marketCap: number }) => ({
        name: stock.symbol,
        value: stock.marketCap,
      })
    );

    return stocks;
  } catch (error) {
    console.error("Error fetching collections data: " + error);
  }
}
