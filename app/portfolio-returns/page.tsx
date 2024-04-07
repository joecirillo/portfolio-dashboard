import {
  calculatePortfolioHoldings,
  calculateStockReturns,
  calculatePortfolioReturnsData,
} from "@/utils/businessRules";
import React from "react";
import { PortfolioReturnsChart, SeparateLegend } from "../components";
import { initials } from "@/constants";

const PortfolioReturns = async () => {
  const returns = await calculatePortfolioReturnsData();
  console.log(returns);
  return (
    <div className="flex flex-col justify-center items-center text-4xl pt-36 mb-10">
      Portfolio Returns
      <div className="relative h-96 w-full mt-6 mb-16 flex flex-col items-center">
        <PortfolioReturnsChart returnData={returns}></PortfolioReturnsChart>
      </div>
      <div>
        <SeparateLegend legendData={initials} />
      </div>
    </div>
  );
};

export default PortfolioReturns;
