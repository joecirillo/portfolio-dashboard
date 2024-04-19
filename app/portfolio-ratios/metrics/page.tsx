import { collections, initials } from "@/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const MetricsStats = (metric: string) => {
  const hi = metric;
  return (
    <div className="flex flex-col items-center text-4xl pt-36 mb-10">
      <h1 className="mb-4">More Details</h1>
      <div className="flex justify-between">
        {initials.map((symbol: any) => (
          <div key={symbol.initials} className="m-8">
            <Image
              src={`/${symbol.initials}_PE.png`}
              alt={`${symbol.initials} PE scores`}
              width={250}
              height={250}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        {initials.map((symbol: any) => (
          <div key={symbol.initials} className="m-8">
            <Image
              src={`/${symbol.initials}_PB.png`}
              alt={`${symbol.initials} PB scores`}
              width={250}
              height={250}
            />
          </div>
        ))}
      </div>
      <Link href="/portfolio-ratios">
        <button className="focus:outline-none text-sm text-white bg-blue-100 hover:bg-light hover:text-black shadow-2xl shadow-black rounded-full p-4">
          Back to Portfolio Ratios
        </button>
      </Link>
    </div>
  );
};

export default MetricsStats;
