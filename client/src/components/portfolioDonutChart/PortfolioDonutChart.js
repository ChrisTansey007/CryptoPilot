// client\src\components\portfolioDonutChart\PortfolioDonutChart.js

import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";
import { mockData } from "./mockExchangeData";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const exchange = mockData.find((exchange) =>
      exchange.children.some((child) => child.id === data.id)
    );

    return (
      <div
        style={{
          backgroundColor: "#fff",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        <p>
          <strong>Account:</strong> {exchange.id}
        </p>
        <p>
          <strong>Asset:</strong> {data.id}
        </p>
        <p>
          <strong>Value:</strong> ${data.value.toFixed(2)}
        </p>
      </div>
    );
  }

  return null;
};

const ASSET_COLORS = {
  Bitcoin: "orange",
  Ethereum: "green",
  Ripple: "red",
  Litecoin: "purple",
  Cardano: "blue",
  Polkadot: "aqua",
};

const legendItems = Object.entries(ASSET_COLORS).map(([id, color]) => ({
  id,
  color,
}));

const InvestmentDonutChart = () => {
  return (
    <PieChart width="100%" height={500}>
      {mockData.map((exchange, index) => (
        <Pie
          dataKey="value"
          data={exchange.children}
          cx="50%"
          cy="50%"
          innerRadius={`${index * 22}%`}
          outerRadius={`${index * 22 + 20}%`}
          fill={ASSET_COLORS[index % ASSET_COLORS.length]}
          paddingAngle={5}
          key={index}
        >
          {exchange.children.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={ASSET_COLORS[entry.id]} />
          ))}
        </Pie>
      ))}
      <Tooltip content={<CustomTooltip />} />
      <Legend
        payload={legendItems.map((item) => ({
          id: item.id,
          type: "square",
          color: item.color,
          value: item.id,
        }))}
      />
    </PieChart>
  );
};

export default InvestmentDonutChart;
