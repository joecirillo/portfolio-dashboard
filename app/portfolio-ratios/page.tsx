import React from "react";
import Image from "next/image";

const PortfolioRatios = () => {
  return (
    <div className="flex justify-center text-4xl pt-36 mb-10">
      Portfolio Ratios
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image src={"/Book_Value.png"} fill alt={"book value"}></Image>
        </div>
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image src={"/PE_Ratio.png"} fill alt={"box plot"}></Image>
        </div>
      </div>
    </div>
  );
};

export default PortfolioRatios;
