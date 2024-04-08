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
  ReferenceLine,
} from "recharts";

const StockReturnsChart = ({ stockReturnData }: any) => {
  console.log(stockReturnData);
  const data = [
    {
      name: "Page A",
      uv: 4000,
    },
    {
      name: "Page B",
      uv: -3000,
    },
    {
      name: "Page C",
      uv: -2000,
    },
    {
      name: "Page D",
      uv: 2780,
    },
    {
      name: "Page E",
      uv: -1890,
    },
    {
      name: "Page F",
      uv: 2390,
    },
    {
      name: "Page G",
      uv: 3490,
    },
    {
      name: "Page A",
      uv: 4000,
    },
    {
      name: "Page B",
      uv: -3000,
    },
    {
      name: "Page C",
      uv: -2000,
    },
    {
      name: "Page D",
      uv: 2780,
    },
    {
      name: "Page E",
      uv: -1890,
    },
    {
      name: "Page F",
      uv: 2390,
    },
    {
      name: "Page G",
      uv: 3490,
    },
    {
      name: "Page A",
      uv: 4000,
    },
    {
      name: "Page B",
      uv: -3000,
    },
    {
      name: "Page C",
      uv: -2000,
    },
    {
      name: "Page D",
      uv: 2780,
    },
    {
      name: "Page E",
      uv: -1890,
    },
    {
      name: "Page F",
      uv: 2390,
    },
    {
      name: "Page G",
      uv: 3490,
    },
    {
      name: "Page A",
      uv: 4000,
    },
    {
      name: "Page B",
      uv: -3000,
    },
    {
      name: "Page C",
      uv: -2000,
    },
    {
      name: "Page D",
      uv: 2780,
    },
    {
      name: "Page E",
      uv: -1890,
    },
    {
      name: "Page F",
      uv: 2390,
    },
    {
      name: "Page G",
      uv: 3490,
    },
  ];

  return (
    <ResponsiveContainer width="90%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={stockReturnData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} />
        <YAxis width={100} />
        <Tooltip
          formatter={(value) => ["return: " + Number(value).toFixed(2) + "%"]}
        />

        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="changeInValue" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StockReturnsChart;
