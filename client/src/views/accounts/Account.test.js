// client\src\views\accounts\Account.test.js

import React from "react";
import { render } from "@testing-library/react";
import Accounts from "./Accounts";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

jest.mock("@mui/material", () => ({
  Grid: jest.fn(({ children }) => <div>{children}</div>),
}));

jest.mock("../../components/accountsComponent/AccountsComponent", () => {
  return jest.fn(() => <div>Mocked AccountsComponent</div>);
});

describe("Accounts component", () => {
  it("renders without crashing", () => {
    render(<Accounts />);
  });

  it("renders the AccountsComponent", () => {
    const { getByText } = render(<Accounts />);
    expect.extend({ toBeInTheDocument });
  });
});
