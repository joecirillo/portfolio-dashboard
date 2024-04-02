import React from "react";
import { PortfolioPieChart } from "../components";
import { collections } from "@/constants";
import {
  getFinancialData,
  getHistoricalMarketCapData,
  getMarketCapData,
} from "@/utils/businessRules";
import { getCollections } from "@/utils/api/getCollections";
import { getHistory } from "@/utils/api/getHistory";

const PortfolioDetails = async () => {
  //  const data = await getMarketCapData();
  // console.log(data);
  const stockData = await getHistoricalMarketCapData();
  console.log(stockData);
  return (
    <div className="flex flex-col justify-center items-center text-4xl pt-36 mb-10">
      Breakdown of Portfolios
      <div className="relative w-full mt-6 flex flex-col items-center">
        {collections.map((collection) => (
          <div
            className="bg-light-white shadow-sm relative w-full h-52 mb-28 mt-28 flex items-center"
            key={collection}
          >
            <h1 className="ml-36 text-center">
              {" "}
              {collection
                .replace(/_/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </h1>
            <PortfolioPieChart collection={stockData[collection]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioDetails;
