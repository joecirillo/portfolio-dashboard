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
      <div className="text-lg ml-36 mr-36">
        <p>
          The graphs depicted are interactive bar charts showing the returns of
          the different individual stocks in each category. The y-axis showing
          the percentage return and the x-axis showing the individual tickers
          for each stock. If the mouse hovers over a specific bar, the user can
          see the exact percentage of the returns of the stock in each category.{" "}
          <br />
          Key Observations: <br />
          Undervalued Growth Stocks: The stock that has the highest return is
          ALSN (Allison Transmission Holdings Inc) with 36.68% and the lowest
          being UA (Under Armour Inc) with -16.89% <br />
          Growth Technology Stocks: The stock that has the highest return is
          QBTS (D-Wave Quantum) with 120.45% and the lowest being OUST (Ouster
          Inc) with -34.13% <br />
          Undervalued Large Caps: The stock that has the highest return is MPC
          (Marathon Petroleum Corp) with 32.18% and the lowest being VALE (Vale
          SA) with -23.136% <br />
          Aggressive Small Caps: The stock that has the highest return is MNMD
          (Mind Medicine (MindMed) Inc) with 156.76% and the lowest being SOS
          (Sos Ltd - ADR) with -70.91% <br />
          Small Cap Gainers: The stock that has the highest return is LXRX
          (Recursion Pharmaceuticals Inc) with 45.64% and the lowest being COMM
          (Commscope Holding Company Inc) with -55.36%
        </p>
      </div>
    </div>
  );
};

export default StockReturns;
