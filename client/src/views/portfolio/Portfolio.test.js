// client/src/views/portfolio/Portfolio.test.js

import React from "react";
import { render } from "@testing-library/react";
import PortfolioView from "./Portfolio";
import toHaveBeenCalledWith from "@testing-library/jest-dom/extend-expect";

jest.mock("@mui/material", () => ({
  Grid: jest.fn(({ children }) => <div>{children}</div>),
}));

jest.mock("../../components/portfolioComponent/PortfolioComponent", () => {
  return jest.fn(() => <div>Mocked PortfolioComponent</div>);
});

jest.mock("../../data/mockData.js", () => ({
  pieData: {},
  barData: {},
  totalBarData: {},
}));

describe("PortfolioView component", () => {
  const consoleSpy = jest.spyOn(console, "log");

  afterEach(() => {
    consoleSpy.mockClear();
  });

  it("renders PortfolioView component without crashing", () => {
    render(<PortfolioView />);
  });

  it("renders the PortfolioComponent with correct props", () => {
    const { getByText } = render(<PortfolioView />);
    expect(getByText("Mocked PortfolioComponent")).toBeInTheDocument();
  });
});
