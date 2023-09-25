// client\src\components\investmentBarChart\InvestmentBarChart.test.js

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InvestmentBarChart from "./InvestmentBarChart";

describe("InvestmentBarChart", () => {
  it("renders without crashing", () => {
    render(<InvestmentBarChart data={[]} />);
  });

  it("renders bars for Profit and Loss with sample data", () => {
    const sampleData = [
      { name: "Jan", Profit: 4000, Loss: 2400 },
      { name: "Feb", Profit: 3000, Loss: 1398 },
    ];

    const { getByText } = render(<InvestmentBarChart data={sampleData} />);

    expect(getByText("Profit")).toBeInTheDocument();
    expect(getByText("Loss")).toBeInTheDocument();
  });
});
