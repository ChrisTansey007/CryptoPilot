// client\src\components\portfolioComponent\PortfolioComponent.test.js

import React from "react";
import { render } from "@testing-library/react";
import PortfolioComponent from "./PortfolioComponent";

jest.mock("../investmentPieChart/InvestmentPieChart", () => (props) => (
  <div data-testid="investment-pie-chart">{JSON.stringify(props)}</div>
));
jest.mock("../investmentBarChart/InvestmentBarChart", () => (props) => (
  <div data-testid="investment-bar-chart">{JSON.stringify(props)}</div>
));
jest.mock(
  "../totalInvestmentBarChart/TotalInvestmentBarChart",
  () => (props) =>
    <div data-testid="total-investment-bar-chart">{JSON.stringify(props)}</div>
);
jest.mock("../portfolioDonutChart/PortfolioDonutChart", () => () => (
  <div data-testid="portfolio-donut-chart"></div>
));
jest.mock("../portfolioStackedBarChart/PortfolioStackedBarChart", () => () => (
  <div data-testid="portfolio-stacked-bar-chart"></div>
));

describe("<PortfolioComponent />", () => {
  it("passes the correct props to child components", () => {
    const pieDataMock = [{ id: 1, value: 10 }];
    const barDataMock = [{ id: 1, type: "Stocks", value: 10 }];
    const totalBarDataMock = [{ id: 1, value: 10 }];

    const { getByTestId } = render(
      <PortfolioComponent
        pieData={pieDataMock}
        barData={barDataMock}
        totalBarData={totalBarDataMock}
      />
    );

    expect(getByTestId("investment-pie-chart").textContent).toContain(
      JSON.stringify({ data: pieDataMock })
    );
    expect(getByTestId("investment-bar-chart").textContent).toContain(
      JSON.stringify({ data: barDataMock })
    );
    expect(getByTestId("total-investment-bar-chart").textContent).toContain(
      JSON.stringify({ data: totalBarDataMock })
    );
  });
});
