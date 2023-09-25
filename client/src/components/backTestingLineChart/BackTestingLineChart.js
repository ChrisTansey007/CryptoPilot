// client\src\components\backTestingLineChart\BackTestingLineChart.js

import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function BackTestingLineChart({ tradeData }) {
  if (!tradeData || tradeData.length === 0) {
    console.log("No data provided to BackTestingLineChart");
    return null;
  }

  return (
    <LineChart
      width={500}
      height={300}
      data={tradeData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      // Line element for plotting the data
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      // Cartesian grid for the chart
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      // X-axis and Y-axis for the chart
      <XAxis dataKey="name" />
      <YAxis />
      // Tooltip for the chart
      <Tooltip />
    </LineChart>
  );
}

BackTestingLineChart.propTypes = {
  tradeData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
    })
  ),
};

export default BackTestingLineChart;
