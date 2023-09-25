// client\src\components\totalInvestmentBarChart\TotalInvestmentBarChart.js

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
import React from "react";

const TotalInvestmentBarChart = ({ data }) => {
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
      <Bar dataKey="value">
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={entry.type === "Profit" ? "#82ca9d" : "#ff6c6c"}
          />
        ))}
      </Bar>
    </BarChart>
  );
};

export default TotalInvestmentBarChart;
