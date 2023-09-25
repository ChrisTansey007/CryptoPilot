// client/src/components/dashboardComponent/DashboardComponent.test.js

import React from "react";
import { render } from "@testing-library/react";
import DashboardComponent from "./DashboardComponent";

jest.mock("../tradesLineChart/TradesLineChart", () => (props) => (
  <div data-testid="trades-line-chart">{JSON.stringify(props)}</div>
));
jest.mock("../tradesAreaChart/TradesAreaChart", () => (props) => (
  <div data-testid="trades-area-chart">{JSON.stringify(props)}</div>
));

describe("<DashboardComponent />", () => {
  it("loads without crashing", () => {
    const { getByTestId } = render(<DashboardComponent />);
    expect(getByTestId("trades-line-chart")).toBeTruthy();
    expect(getByTestId("trades-area-chart")).toBeTruthy();
  });
});
