import React from "react";
import { PortfolioPieChart } from "../components";

const PortfolioDetails = () => {
  return (
    <div className="flex flex-col justify-center items-center text-4xl pt-36 mb-10">
      hi
      <div className="relative w-full h-60 mt-6 flex justify-center items-center">
        <PortfolioPieChart />
      </div>
    </div>
  );
};

export default PortfolioDetails;
