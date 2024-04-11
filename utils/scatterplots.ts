import { getCollections } from "./api/getCollections";
import { collections } from "@/constants";

export async function getAnalystData() {
  const allResults = await Promise.all(
    collections.map(async (collection: string) => {
      const collectionData = await getCollections(collection);

      const results = await Promise.all(
        collectionData.map(async (collectionItem: any) => {
          // Check if averageAnalystRating exists and is not undefined
          if (collectionItem.averageAnalystRating) {
            const [ratingValue, ratingRecommendation] =
              collectionItem.averageAnalystRating.split(" - ");
            return {
              portfolioName: collection,
              name: collectionItem.name,
              averageAnalystRating: ratingValue,
              averageAnalystRecommendation: ratingRecommendation,
              forwardPE: collectionItem.forwardPE,
              fiftyDayAverageChangePercent:
                collectionItem.fiftyDayAverageChangePercent,
            };
          } else {
            console.log(
              "Stock is missing data and will be excluded: " +
                collectionItem.name
            );
            // Exclude the collectionItem from the results if averageAnalystRating is undefined
            return null;
          }
        })
      );

      // Filter out null values to exclude the collectionItem with undefined averageAnalystRating
      const filteredResults = results.filter((result) => result !== null);
      return filteredResults;
    })
  );

  // Flatten the array of arrays into a single array
  const combinedResults = allResults.flat();
  console.log(combinedResults);
  return combinedResults;
}
