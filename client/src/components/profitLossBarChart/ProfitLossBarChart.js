// client\src\components\profitLossBarChart\ProfitLossBarChart.js

import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import mockData from "./mockProfitLossBarChart";

const data = mockData;

const ProfitLossBarChart = () => {
  return (
    <BarChart
      layout="vertical"
      data={data}
      barSize={20}
      width="100%"
      height={400}
    >
      <CartesianGrid stroke="#ccc" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" orientation="right" />
      <Bar dataKey="uv" fill="#8884d8" />
      <Tooltip />
    </BarChart>
  );
};

export default ProfitLossBarChart;
