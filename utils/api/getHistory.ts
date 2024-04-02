export async function getHistory(stock: string) {
  const headers = {
    Authorization: `Bearer ${process.env.API_KEY_SANDBOX}`,
    Accept: "application/json",
  };
  try {
    const response = await fetch(
      `https://sandbox.tradier.com/v1/markets/history?symbol=${stock}&interval=monthly`,
      { headers: headers }
    );

    const result = await response.json();

    const quote: string = result.history.day[0].close;
    return quote;
  } catch (error) {
    console.error(
      "Could not fetch historical quote for " + stock + " " + error
    );
  }
}
