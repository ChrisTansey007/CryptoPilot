// client\src\components\investmentPieChart\InvestmentPieChart.js

import React from "react";
import { css } from "@emotion/react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const InvestmentPieChart = ({ data, onSelectInvestment }) => {
  if (!Array.isArray(data)) {
    return <div>Loading...</div>;
  }

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        onMouseOver={(data, index) => {
          onSelectInvestment(data.payload.name);
        }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default InvestmentPieChart;
