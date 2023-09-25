// client\src\components\accountsComponent\AccountsComponent.test.js

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AccountsComponent from "./AccountsComponent";
import AccountDialog from "../accountDialog/AccountDialog";
import AccountsTable from "../accountsTable/AccountsTable";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../accountsTable/AccountsTable", () => (props) => (
  <div data-testid="mock-accounts-table"></div>
));

jest.mock("../accountDialog/AccountDialog", () => (props) => {
  const { open, onClose, onAddAccount } = props;
  return (
    open && (
      <div data-testid="mock-account-dialog">
        <button
          data-testid="mock-add-account"
          onClick={() => onAddAccount({ name: "Test Account" })}
        >
          Add
        </button>
        <button data-testid="mock-close-dialog" onClick={onClose}>
          Close
        </button>
      </div>
    )
  );
});

describe("<AccountsComponent />", () => {
  it("renders without crashing", () => {
    render(<AccountsComponent />);
    expect(screen.getByTestId("mock-accounts-table")).toBeInTheDocument();
  });

  it("opens and closes the AccountDialog", () => {
    render(<AccountsComponent />);
    fireEvent.click(screen.getByText("Add Account"));
    expect(screen.getByTestId("mock-account-dialog")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("mock-close-dialog"));
    expect(screen.queryByTestId("mock-account-dialog")).not.toBeInTheDocument();
  });

  it("handles adding an account", () => {
    render(<AccountsComponent />);
    fireEvent.click(screen.getByText("Add Account"));
    fireEvent.click(screen.getByTestId("mock-add-account"));
  });
});
