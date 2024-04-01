import { getCollections } from "@/utils/api/getCollections";
import React, { useEffect } from "react";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="text-center pt-36 mb-10">
        <h1 className="text-4xl">Portfolios by Stock Category</h1>

        <section className="mt-12 mb-12 ml-24 mr-24">
          <h2 className="text-xl font-bold mb-4">Portfolio Considerations</h2>
          <p className="text-left">
            Investing in a well-diversified portfolio of stocks is an important
            part of financial planning and management. One approach to
            constructing such a portfolio is to focus on specific investing
            strategies using fundamental analysis, such as evaluating value or
            growth stocks. Other factors like the industry a company belongs to
            can be part of investment decisions. The market capitalization (or
            cap) is a key metric in investment strategies which represents the
            total value of a company’s outstanding shares. This helps to gauge
            the size and significance within a portfolio.
          </p>
        </section>

        <section className="mt-12 mb-12 ml-24 mr-24">
          <h2 className="text-xl font-bold mb-4">Chosen Portfolios</h2>
          <p className="text-left">
            For the purposes of this project, we will consider four distinct
            categories: undervalued growth stocks, growth technology stocks,
            undervalued large caps, and aggressive small caps. Each category
            represents a different investment strategy and risk profile,
            catering to various investor preferences and objectives.
          </p>
          <ul className="list-disc ml-8">
            <li className="m-4 text-left">
              Undervalued growth stocks offer the potential for long-term
              capital appreciation, as they are priced below their intrinsic
              value despite exhibiting strong growth prospects.
            </li>
            <li className=" m-4 text-left">
              Growth technology stocks focus on companies at the forefront of
              innovation and disruption, with the potential for exponential
              growth driven by technological advancements.
            </li>
            <li className=" m-4 text-left">
              Undervalued large caps represent stable and established companies
              trading at a discount relative to their intrinsic value, offering
              investors the opportunity to capitalize on potential market
              inefficiencies.
            </li>
            <li className="m-4 text-left">
              Aggressive small caps target high-growth, high-risk companies with
              smaller market capitalizations, offering the potential for
              significant returns, but also higher volatility.
            </li>
            <li className="m-4 text-left">
              Small cap gainers have enjoyed good returns for a given period,
              but there is no guarantee that their price will not go down
            </li>
          </ul>
          <p className="text-left">
            By understanding and strategically allocating investments across
            these different categories, investors can build diversified
            portfolios tailored to their risk tolerance, investment objectives,
            and time horizon, ultimately aiming to achieve their financial goals
            while managing risk effectively.
          </p>
        </section>

        <section className="mt-12 mb-12 ml-24 mr-24">
          <h2 className="text-xl font-bold mb-4">Plan for Analysis</h2>
          <p className="text-left">
            In addition to data querying and collection, we will be doing high
            level analysis. This will involve calculations because we will be
            evaluating data based on 25 stock portfolios instead of individual
            stocks. We will also have to derive some data, such as the price to
            earnings ratio, since some ratios are not directly provided from the
            API.
          </p>
          <p className="text-left">
            In terms of the data visualization, we will be presenting a
            combination of static and interactive graphics. For the static
            visualizations, we plan to depict bar and pie charts to represent
            the weights, diversity, and basic metrics (market cap, earnings,
            etc) in each category portfolio. The interactive visualizations we
            hope to create using this API are scatter plots to show the risk
            (volatility) and potential returns for stocks in each category,
            bubble charts to depict the market cap, growth rate, and
            characteristics of each stock, and time charts to capture the
            historical performance. Depending on the data, we are also hoping to
            add a bonus of a portfolio simulator to depict the impact of
            adjusting the allocation of stocks within each category on the
            overall portfolio performance.
          </p>
        </section>
      </div>
    </main>
  );
}
