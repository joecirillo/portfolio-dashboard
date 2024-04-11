import React from "react";
import { PortfolioReturnsChart, SeparateLegend } from "../components";
import { collections, initials } from "@/constants";
import {
  calculatePortfolioReturnsData2,
  getHistoricalCollectionQuotes,
} from "@/utils/portfolioCalculations";

const PortfolioReturns = async () => {
  const x = await calculatePortfolioReturnsData2();
  console.log(x);
  return (
    <div className="flex flex-col justify-center items-center text-4xl pt-36 mb-10">
      Portfolio Returns
      <div className="relative h-96 w-full mt-6 mb-16 flex flex-col items-center">
        <PortfolioReturnsChart returnData={x}></PortfolioReturnsChart>
      </div>
      <div>
        <SeparateLegend legendData={initials} />
      </div>
      <p className="text-sm mt-8">*info here*</p>
    </div>
  );
};

export default PortfolioReturns;
