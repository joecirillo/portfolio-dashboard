import React from "react";
import { StockReturnsChart } from "../components";
import { calculateStockReturns2 } from "@/utils/portfolioCalculations";

const StockReturns = async () => {
  const x = await calculateStockReturns2();
  console.log(x);
  return (
    <div className="flex flex-col justify-center items-center text-4xl pt-36 mb-10">
      <h1 className="mb-8">Stock Returns</h1>
      {Object.keys(x).map((key) => (
        <div key={key} style={{ width: "80%", marginBottom: "20px" }}>
          <h2 className="flex justify-center">
            {key
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </h2>
          <div className="relative h-96 w-full mt-6 mb-16 flex flex-col items-center">
            <StockReturnsChart stockReturnData={x[key]} />
          </div>
        </div>
      ))}
      <p className="text-sm"> insert info here</p>
    </div>
  );
};

export default StockReturns;
