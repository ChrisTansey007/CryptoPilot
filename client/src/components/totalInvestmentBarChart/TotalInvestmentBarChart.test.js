import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TotalInvestmentBarChart from "./TotalInvestmentBarChart";

describe("TotalInvestmentBarChart Component", () => {
  test("renders without crashing", () => {
    render(<TotalInvestmentBarChart />);
  });
});
