import { collections } from "@/constants";
import { getAnalystData } from "@/utils/scatterplots";
import React from "react";
import { AnalystScatterPlot } from "../components";

const AnalystRatings = async () => {
  const ratings = await getAnalystData();
  console.log(ratings.length);
  // console.log(ratings);

  return (
    <div className="flex flex-col items-align text-4xl pt-36 mb-10">
      <h1 className="flex justify-center">Analyst Ratings</h1>
      <div className="relative h-full m-12 flex flex-col justify-center">
        <AnalystScatterPlot ratings={ratings}></AnalystScatterPlot>
      </div>
      <p className="flex justify-center text-sm">*insert info here*</p>
    </div>
  );
};

export default AnalystRatings;
