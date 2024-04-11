import React from "react";
import Image from "next/image";
import Link from "next/link";

const PortfolioRatios = () => {
  return (
    <div className="flex flex-col items-center text-4xl pt-36 mb-10">
      <h1 className="mb-4">Portfolio Ratios</h1>
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
          <p className="text-sm m-8">*insert info about box plot here*</p>
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
          <p className="text-sm m-8">*insert info about box plot here*</p>
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
