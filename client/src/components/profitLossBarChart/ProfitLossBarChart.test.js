import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProfitLossBarChart from "./ProfitLossBarChart";

describe("ProfitLossBarChart", () => {
  test("renders without crashing", () => {
    render(<ProfitLossBarChart />);
  });
});
