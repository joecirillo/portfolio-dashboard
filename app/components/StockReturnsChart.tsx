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

  const yAxisFormatter = (value: any) => `${value * 100}%`;

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
        <XAxis
          dataKey="name"
          tick={{ fontSize: 14, fontWeight: "bold" }}
          interval={0}
        />
        <YAxis width={100} tickFormatter={yAxisFormatter} />
        <Tooltip
          formatter={(value) => [
            "return: " + (Number(value) * 100).toFixed(2) + "%",
          ]}
        />

        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="changeInValue" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StockReturnsChart;
