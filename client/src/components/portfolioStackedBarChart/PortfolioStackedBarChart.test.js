import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PortfolioStackedBarChart from "./PortfolioStackedBarChart";

describe("PortfolioStackedBarChart", () => {
  test("renders without crashing", () => {
    render(<PortfolioStackedBarChart />);
  });
});
