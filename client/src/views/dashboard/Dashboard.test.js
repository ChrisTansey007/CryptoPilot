// client/src/views/dashboard/Dashboard.test.js

import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";
import "@testing-library/jest-dom/extend-expect";

jest.mock("@mui/material", () => ({
  Grid: jest.fn(({ children }) => <div>{children}</div>),
}));

jest.mock("../../components/dashboardComponent/DashboardComponent", () => {
  return jest.fn(() => <div>Mocked DashboardComponent</div>);
});

describe("Dashboard component", () => {
  const consoleSpy = jest.spyOn(console, "log");

  afterEach(() => {
    consoleSpy.mockClear();
  });

  it("renders Dashboard component without crashing", () => {
    render(<Dashboard />);
  });

  it("renders the DashboardComponent", () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText("Mocked DashboardComponent")).toBeInTheDocument();
  });
});
