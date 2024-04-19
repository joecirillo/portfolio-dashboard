/* eslint-disable react/no-unescaped-entities */
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
      <p className="flex justify-center text-lg ml-36 mr-36">
        This interactive scatterplot empowers you to explore the relationship
        between analyst ratings and other investment factors. Visualize how
        analyst sentiment, represented on a scale of 1 (strong buy) to 5 (strong
        sell), interacts with various categories of your choosing. <br /> Key
        Features:
        <br />
        Analyst Rating Spectrum: <br />
        The z-axis acts as a spectrum, with 1 denoting a highly favorable
        analyst perspective and 5 signifying a bearish outlook. This color-coded
        dimension allows instant identification of companies receiving strong
        buy or sell recommendations. <br />
        Interactive Category Selection: <br /> Take control of the data
        visualization. By selecting specific categories, the data points can be
        filtered to be displayed on the graph. This enables focus on specific
        sectors, company sizes, or any other relevant category that might
        influence your investment decisions. <br />
        Targeted Analysis: <br />
        Let's say a user is interested in technology startups. By selecting only
        "Tech Startups" from the available categories, the graph will solely
        showcase data points for those companies. This targeted analysis allows
        you to assess analyst sentiment within a specific market segment.
      </p>
    </div>
  );
};

export default AnalystRatings;
