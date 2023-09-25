// client\src\views\backTesting\Backtesting.test.js

import React from "react";
import { render } from "@testing-library/react";
import BackTesting from "./BackTesting";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../components/backTestingTradeTable/BackTestTradeTable", () => {
  return jest.fn(() => <div>Mocked BackTestTradeTable</div>);
});

jest.mock("../../components/backTestDetails/BackTestDetails", () => {
  return jest.fn(() => <div>Mocked BackTestDetails</div>);
});

jest.mock("../../components/backTestingLineChart/BackTestingLineChart", () => {
  return jest.fn(() => <div>Mocked BackTestingLineChart</div>);
});

jest.mock(
  "../../components/backTestingMonthlyBarChart/BackTestingMonthlyBarChart",
  () => {
    return jest.fn(() => <div>Mocked BackTestingMonthlyBarChart</div>);
  }
);

describe("BackTesting component", () => {
  it("renders BackTesting component without crashing", () => {
    render(<BackTesting />);
  });

  it("renders the BackTestTradeTable component", () => {
    const { getByText } = render(<BackTesting />);
    expect(getByText("Mocked BackTestTradeTable")).toBeInTheDocument();
  });

  it("renders the BackTestDetails component", () => {
    const { getByText } = render(<BackTesting />);
    expect(getByText("Mocked BackTestDetails")).toBeInTheDocument();
  });

  it("renders the BackTestingLineChart component", () => {
    const { getByText } = render(<BackTesting />);
    expect(getByText("Mocked BackTestingLineChart")).toBeInTheDocument();
  });

  it("renders the BackTestingMonthlyBarChart component", () => {
    const { getByText } = render(<BackTesting />);
    expect(getByText("Mocked BackTestingMonthlyBarChart")).toBeInTheDocument();
  });
});
