import React from "react";
import { PortfolioPieChart } from "../components";
import { collections } from "@/constants";
import { getFinancialData } from "@/utils/businessRules";
import { getCollections } from "@/utils/api/getCollections";

export async function getMarketCapData() {
  try {
    const data: { [key: string]: any } = {};
    for (const collection of collections) {
      const collectionData = await getCollections(collection);
      data[collection] = collectionData;
    }
    //   console.log("Market cap data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching market cap data:", error);
  }
}

const PortfolioDetails = async () => {
  const data = await getMarketCapData();
  console.log(data);
  return (
    <div className="flex flex-col justify-center items-center text-4xl pt-36 mb-10">
      Breakdown of Portfolios
      <div className="relative w-full mt-6 flex flex-col items-center">
        {collections.map((collection) => (
          <div
            className="bg-light-white shadow-sm relative w-full h-40 mb-24 mt-24 flex items-center"
            key={collection}
          >
            <h1 className="ml-36 text-center">
              {" "}
              {collection
                .replace(/_/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </h1>
            <PortfolioPieChart collection={data[collection]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioDetails;
