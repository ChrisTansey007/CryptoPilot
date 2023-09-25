// client\src\components\portfolioDonutChart\PortfolioDonutChart.test.js

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PortfolioDonutChart from "./PortfolioDonutChart";

describe("PortfolioDonutChart", () => {
  test("renders without crashing", () => {
    render(<PortfolioDonutChart />);
  });
});
