"use client";

import {
  PortfolioPieChartProps,
  MarketCapCalculationsPropsArray,
  MarketCapProps,
} from "@/types";
import { getCollections } from "@/utils/api/getCollections";
import { getFinancialData } from "@/utils/businessRules";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";

const data2 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 150 },
];

const small_cap_gainers = [
  { name: "SOS", value: 29570776 },
  { name: "NKLA", value: 1389044736 },
  { name: "CDE", value: 1456215296 },
  { name: "EAF", value: 354428160 },
  { name: "AG", value: 1688677376 },
];

const data = [
  { name: "Group 1", value: 400 },
  { name: "Group 2", value: 300 },
  { name: "Group 3", value: 300 },
  { name: "Group 4", value: 200 },
  { name: "Group 5", value: 150 },
];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        className="text-xl"
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
        className="text-base"
      >{`Market Cap: $${value.toLocaleString()}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
        className="text-base mb-6"
      >
        {`(${(percent * 100).toFixed(2)}% of Portfolio Holding)`}
      </text>
    </g>
  );
};

const PortfolioPieChart = ({
  collection,
}: {
  collection: PortfolioPieChartProps[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const colors = ["#e73d18", "#18c2e7", "#339b16", "#b51fe0", "#7c8380"];

  const onPieEnter = (_: any, index: any) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="200%" height="200%">
      <PieChart width={1000} height={1000}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={collection}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={150}
          fill="#1730ae"
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {collection.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PortfolioPieChart;
