/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const PortfolioRatios = () => {
  return (
    <div className="flex flex-col items-center text-4xl pt-36 mb-10">
      <h1 className="mb-4">Portfolio Ratios</h1>
      <p className="text-lg ml-36 mr-36 mt-8">
        The provided visualization presents a compelling comparison of two key
        financial ratios - price-to-book (P/B) and price-to-earnings (P/E) -
        across various stock categories. These ratios offer valuable insights
        into how the market values companies within different segments. Growth
        Technology Takes the Lead: The box plots reveal that Growth Technology
        stocks exhibit the widest range for both P/B and P/E ratios. The
        undervalued Large Caps seem to have a very centered range for both the
        P/E rate and the P/B ratio This could be attributed to the inherent
        uncertainty associated with future growth potential in this sector,
        leading to a broader range of valuations assigned by the market.
        Outliers: Open circles represent outliers, data points that fall
        significantly outside the main distribution. These outliers could be
        companies within a category experiencing exceptional growth or facing
        unforeseen challenges, leading to their P/B or P/E ratios deviating from
        the norm
      </p>
      <div className="flex m-4">
        <div
          className="flex flex-col items-center mt-4 mr-16"
          key="price-to-book"
        >
          <Image
            src={"/Price_Book_Ratio.png"}
            width={500}
            height={500}
            alt={"book value"}
          ></Image>
          <p className="text-lg ml-36 m-8">
            P/B Ratio: This metric reflects the market's perception of a
            company's value relative to its book value per share. A higher P/B
            ratio suggests the market believes the company's future earnings
            potential outweighs its current book value
          </p>
        </div>
        <div
          className="flex flex-col items-center mt-4 ml-16"
          key="price-to-earnings"
        >
          <Image
            src={"/PE_Ratio.png"}
            width={500}
            height={500}
            alt={"box plot"}
          ></Image>
          <p className="text-lg mr-36 m-8">
            P/E Ratio: This metric tells us how much investors are willing to
            pay for each dollar of a company's current earnings. A high P/E
            ratio might indicate an expectation of strong future growth or an
            overvalued stock.
          </p>
        </div>
      </div>
      <Link href="/portfolio-ratios/metrics">
        <button className="focus:outline-none text-white text-sm bg-blue-100 hover:bg-light hover:text-black shadow-2xl shadow-black rounded-full p-4">
          More Details
        </button>
      </Link>
    </div>
  );
};

export default PortfolioRatios;
