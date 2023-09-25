// client\src\components\backTestingMonthlyBarChart\BackTestingMonthlyBarChart.js

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
  Cell,
} from "recharts";

const BackTestingMonthlyBarChart = ({ data }) => {
  if (!Array.isArray(data)) {
    return <div>Loading...</div>;
  }

  return (
    <BarChart
      width={800}
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
      <Bar dataKey="profit" fill="#82ca9d" name="Profit" />
      <Bar dataKey="loss" fill="#ff6c6c" name="Loss" />
    </BarChart>
  );
};

export default BackTestingMonthlyBarChart;
