import {
  calculatePortfolioReturnsData,
  calculateStockReturns,
} from "@/utils/businessRules";
import React from "react";
import { StockReturnsChart } from "../components";

const StockReturns = async () => {
  const returns = await calculateStockReturns();
  console.log(returns);
  return (
    <div className="flex flex-col justify-center items-center text-4xl pt-36 mb-10">
      {Object.keys(returns).map((key) => (
        <div key={key} style={{ width: "80%", marginBottom: "20px" }}>
          <h2 className="flex justify-center">
            {key
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </h2>
          <div className="relative h-96 w-full mt-6 mb-16 flex flex-col items-center">
            <StockReturnsChart stockReturnData={returns[key]} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StockReturns;
