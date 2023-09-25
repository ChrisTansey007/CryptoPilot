import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TradesAreaChart from "./TradesAreaChart";

describe("TradesAreaChart Component", () => {
  test("renders without crashing", () => {
    render(<TradesAreaChart />);
  });
});
