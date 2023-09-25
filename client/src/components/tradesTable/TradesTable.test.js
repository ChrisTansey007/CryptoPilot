import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TradesTable from "./TradesTable";
import mockTradesData from "./mockTradesTableData";

describe("TradesTable Component", () => {
  beforeEach(() => {
    render(<TradesTable />);
  });

  test("renders table headers", () => {
    expect(screen.getByText("Trade")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Time")).toBeInTheDocument();
    expect(screen.getByText("Currency Pair")).toBeInTheDocument();
  });

  test("renders mock data", () => {
    const firstTrade = mockTradesData[0];
    expect(screen.getByText(firstTrade.trade)).toBeInTheDocument();
    expect(screen.getByText(firstTrade.price)).toBeInTheDocument();
    expect(screen.getByText(firstTrade.date)).toBeInTheDocument();
    expect(screen.getByText(firstTrade.time)).toBeInTheDocument();

    const currencyPairElements = screen.getAllByText(firstTrade.currencyPair);
    expect(currencyPairElements.length).toBeGreaterThan(0);
  });
});
