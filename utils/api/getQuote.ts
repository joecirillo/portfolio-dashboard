export async function getQuotes(stock: string) {
  const headers = {
    Authorization: `Bearer ${process.env.API_KEY_SANDBOX}`,
    Accept: "application/json",
  };
  try {
    const response = await fetch(
      `https://sandbox.tradier.com/v1/markets/quotes?symbols=${stock}`,
      { headers: headers }
    );

    const result = await response.json();

    const quote: string = result.quotes.quote.last;
    return quote;
  } catch (error) {
    console.error("Could not fetch quote " + error);
  }
}
