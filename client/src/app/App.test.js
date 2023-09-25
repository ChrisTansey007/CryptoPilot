// client\src\app\App.test.js

import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

jest.mock("../views/dashboard/Dashboard", () => () => null);
jest.mock("../views/accounts/Accounts", () => () => null);
jest.mock("../views/dashboard/Dashboard", () => () => null);
jest.mock("../views/portfolio/Portfolio", () => () => null);
jest.mock("../views/backtesting/Backtesting", () => () => null);

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByTestId("app-component")).toBeInTheDocument();
  });
});
