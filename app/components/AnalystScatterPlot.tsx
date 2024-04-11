"use client";
import React from "react";
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { ScatterCustomizedShape } from "recharts/types/cartesian/Scatter";

export const collections = [
  "undervalued_growth_stocks",
  "growth_technology_stocks",
  "undervalued_large_caps",
  "aggressive_small_caps",
  "small_cap_gainers",
];

// Define a mapping of collection names to shapes
const shapeMapping: { [key: string]: ScatterCustomizedShape } = {
  undervalued_growth_stocks: "star",
  growth_technology_stocks: "triangle",
  undervalued_large_caps: "circle",
  aggressive_small_caps: "cross",
  small_cap_gainers: "diamond",
};

// Define a mapping of collection names to colors
const colorMapping: { [key: string]: string } = {
  undervalued_growth_stocks: "#8884d8",
  growth_technology_stocks: "#82ca9d",
  undervalued_large_caps: "#ffc658",
  aggressive_small_caps: "#ff7300",
  small_cap_gainers: "#ff4d4f",
};

const AnalystScatterPlot = ({ ratings }: any) => {
  console.log(ratings);

  // Function to round a number to three decimal places
  const roundToThreeDecimals = (number: number) => {
    return parseFloat(number.toFixed(3));
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 50,
          bottom: 10,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis
          type="number"
          dataKey="forwardPE"
          name="Forward PE"
          domain={[0, "auto"]}
        />
        <YAxis
          type="number"
          dataKey="averageAnalystRating"
          name="Average Rating"
          width={100}
          domain={[1, 5]}
        />
        <ZAxis
          type="number"
          dataKey="fiftyDayAverageChangePercent"
          range={[60, 400]}
          name="Average Daily Change"
          unit="%"
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />

        {collections.map((collection) => {
          const filteredRatings = ratings.filter(
            (rating: any) => rating.portfolioName === collection
          );
          const shape = shapeMapping[collection];
          const color = colorMapping[collection];
          return (
            <Scatter
              key={collection}
              name={collection}
              data={filteredRatings.map((rating: any) => ({
                ...rating,
                fiftyDayAverageChangePercent: roundToThreeDecimals(
                  rating.fiftyDayAverageChangePercent
                ),
              }))}
              fill={color} // Set the color based on the mapping
              shape="circle" // Set the shape based on the mapping
            />
          );
        })}
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default AnalystScatterPlot;
