"use client";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PortfolioReturnsChart = ({ returnData }: any) => {
  const extractInitials = (category: string) => {
    // Split category name by spaces
    const words = category.split("_");
    // Extract the first letter of each word
    const initials = words.map((word) => word[0]).join("");
    return initials.toUpperCase(); // Convert to uppercase
  };

  const chartData = returnData.map(
    (item: { name: string; return: number }) => ({
      name: extractInitials(item.name), // Use initials as name
      return: (item.return * 100).toFixed(2), // Multiply the value by 100
    })
  );

  console.log(chartData);

  return (
    <ResponsiveContainer width="80%" height="100%">
      <BarChart
        width={200}
        height={120}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 45,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          angle={-45} // Rotate labels by -45 degrees
          interval={0} // Display all labels without skipping any
          padding={{ left: 20, right: 20 }} // Add padding to prevent labels from being cut off
          textAnchor="end" // Anchor labels to the end of ticks
        />
        <YAxis
          width={100}
          domain={[0, 100]} // Ensure y-axis starts from 0 and extends to the maximum data value
          interval="preserveStartEnd" // Preserve the start and end ticks
        />
        <Tooltip
          formatter={(value) => ["return: " + Number(value).toFixed(2) + "%"]}
        />
        <Bar
          dataKey="return"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PortfolioReturnsChart;
