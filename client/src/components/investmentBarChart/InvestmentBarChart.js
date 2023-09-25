// client\src\components\investmentBarChart\InvestmentBarChart.js

import React from "react";
import { css } from "@emotion/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { mockData } from "./mockInvestmentBarChartData";

const InvestmentBarChart = ({ data }) => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Profit" fill="#82ca9d" />

      <Bar dataKey="Loss" fill="#ff6c6c" />
    </BarChart>
  );
};

export default InvestmentBarChart;
