// client\src\components\investmentPieChart\InvestmentPieChart.test.js

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InvestmentPieChart from "./InvestmentPieChart";

describe("InvestmentPieChart", () => {
  let mockOnSelectInvestment;

  beforeEach(() => {
    mockOnSelectInvestment = jest.fn();
  });

  it("renders without crashing", () => {
    render(
      <InvestmentPieChart
        data={[]}
        onSelectInvestment={mockOnSelectInvestment}
      />
    );
  });

  it("displays 'Loading...' when data is not an array", () => {
    const { getByText } = render(
      <InvestmentPieChart
        data={null}
        onSelectInvestment={mockOnSelectInvestment}
      />
    );
    expect(getByText("Loading...")).toBeInTheDocument();
  });
});
