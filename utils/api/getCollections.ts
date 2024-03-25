export async function getCollections(collection: string) {
  try {
    const response = await fetch(
      `https://mboum.com/api/v1/co/collections/?list=${collection}&start=1&apikey=demo`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch collections data");
    }
    const result = await response.json();
  } catch (error) {
    console.error("Error fetching collections data: " + error);
  }
}
