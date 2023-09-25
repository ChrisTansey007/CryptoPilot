import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TradesLineChart from "./TradesLineChart";

describe("TradesLineChart", () => {
  test("renders without crashing", () => {
    render(<TradesLineChart />);
  });
});
