// client\src\components\portfolioStackedBarChart\PortfolioStackedBarChart.js

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { mockData } from "../portfolioDonutChart/mockExchangeData";

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

const chartData = mockData.map((exchange) => {
  const newData = { account: exchange.id };
  exchange.children.forEach((child) => {
    newData[child.id] = child.value;
  });
  return newData;
});

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        <p>
          <strong>Account:</strong> {payload[0].payload.account}
        </p>
        <p>
          <strong>Asset:</strong> {payload[0].name}
        </p>
        <p>
          <strong>Value:</strong> ${payload[0].value.toFixed(2)}
        </p>
      </div>
    );
  }
  return null;
};

const PortfolioStackedBarChart = () => {
  return (
    <BarChart data={chartData} layout="vertical" width="100%" height={500}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="account" type="category" />
      <Tooltip content={<CustomTooltip />} />
      <Legend
        payload={legendItems.map((item) => ({
          id: item.id,
          type: "square",
          color: item.color,
          value: item.id,
        }))}
      />
      {Object.keys(ASSET_COLORS).map((crypto, index) => (
        <Bar
          dataKey={crypto}
          stackId="a"
          fill={ASSET_COLORS[crypto]}
          key={index}
        />
      ))}
    </BarChart>
  );
};

export default PortfolioStackedBarChart;
