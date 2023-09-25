// client/src/components/backTestingComponent/BackTestingComponent.test.js

import React from "react";
import { render } from "@testing-library/react";
import BackTestingComponent from "./BackTestingComponent";

jest.mock("../backTestingLineChart/BackTestingLineChart", () => () => (
  <div data-testid="backtesting-line-chart">Line Chart</div>
));
jest.mock(
  "../backTestingMonthlyBarChart/BackTestingMonthlyBarChart",
  () => () => <div data-testid="backtesting-bar-chart">Bar Chart</div>
);
jest.mock("../backTestingTradeTable/BackTestTradeTable", () => (props) => (
  <div data-testid="backtest-trade-table">{JSON.stringify(props)}</div>
));

const BackTestDetailsPlaceholder = () => (
  <div data-testid="backtest-details-placeholder">
    BackTestDetails is under development.
  </div>
);

describe("<BackTestingComponent />", () => {
  it("loads without crashing", () => {
    const { getByText } = render(<BackTestingComponent backTestData={[]} />);
    expect(getByText("Line Chart")).toBeTruthy();
    expect(getByText("Bar Chart")).toBeTruthy();
  });

  it("passes correct props to child components based on backTestData", () => {
    const backTestDataMock = [
      { id: 1, name: "Trade 1", strategyDetails: { type: "Strategy A" } },
    ];
    const { getByTestId } = render(
      <BackTestingComponent backTestData={backTestDataMock} />
    );

    expect(getByTestId("backtest-trade-table").textContent).toContain(
      JSON.stringify({ selectedTrade: backTestDataMock[0] })
    );
    expect(getByTestId("backtest-details-placeholder").textContent).toContain(
      "BackTestDetails is under development."
    );
  });
});
