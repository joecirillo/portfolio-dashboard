/* eslint-disable react/no-unescaped-entities */
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
      <p className="text-lg mt-8 ml-36 mr-36">
        This bar graph offers a clear view of this portfolio's performance
        through percentage returns of each category The y-axis represents the
        return on your portfolio, labeled as "Portfolio Returns." The vertical
        bars correspond to each time period, with the height of each bar
        indicating the return achieved during that period. If the mouse hovers
        over a specific bar, the user can see the exact percentage of the
        returns per category. Key Takeaways: Performance Over Time: Based on the
        bar’s height for each category, it can visually be seen which categories
        have higher returns. Taller bars indicate periods of greater growth,
        while shorter bars represent lower returns or even potential losses (if
        the bar dips below the zero line on the y-axis). The Growth Technology
        Stocks tend to have the highest percentage return whereas there is a
        loss for the Aggressive Small Caps.
      </p>
    </div>
  );
};

export default PortfolioReturns;
