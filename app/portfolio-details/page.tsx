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
  // console.log(stockData);
  // const portfolio = await getMarketCapData();
  // console.log("------------");
  // console.log(portfolio);
  return (
    <div className="flex flex-col justify-center items-center text-4xl pt-36 mb-10">
      Breakdown of Portfolios
      <p className="text-lg ml-36 mr-36 mt-8">
        The pie charts above show the distrubution of market capitalization for
        various stock tickers in each of the five categories. Each slice
        represents a specific ticker in a given portfolio, with the percent
        being its total holding. The market cap of the stock is shown when you
        hover above it with your mouse. The size of each slice is proportional
        to the size of the holding compared to the other holdings in the
        portfolio, and these holdings have been determined based on the value of
        stocks at the beginning period of January 1st, 2024. Because we have
        determined portfolio holdings for our portfolios based on market cap
        weighting rather than equally weighting or value weighting, some stocks
        comprise a large portfolio of their portfolio. One example of this is
        NVDA, with it comprising over 80% of the growth technology stock
        portfolio. Looking at other portfolios, there are no other stocks that
        make up as high of a percentage of the portfolio, with the next closest
        stock being BMY in the undervalued growth stock portfolio{" "}
      </p>
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
            <PortfolioPieChart collection={stockData![collection]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioDetails;
