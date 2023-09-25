import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AccountsTable from "./AccountsTable";
import {
  fetchAccountsTableData,
  deleteAccountFromTable,
} from "../../logic/businessLogic";
import useStore from "../../store";

jest.mock("./AccountsTable.css", () => ({}));

jest.mock("../../store", () => ({
  __esModule: true,
  default: jest.fn(),
}));

global.fetch = jest
  .fn()
  .mockResolvedValue({ ok: true, json: jest.fn().mockResolvedValue({}) });

jest.mock("../../logic/businessLogic", () => ({
  fetchAccountsTableData: jest
    .fn()
    .mockResolvedValue({ data: [], error: null }),
  deleteAccountFromTable: jest
    .fn()
    .mockResolvedValue({ success: true, error: null }),
}));

describe("<AccountsTable />", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useStore
      .mockImplementationOnce((selector) => selector({ accounts: [] }))
      .mockImplementationOnce((selector) =>
        selector({ setAccounts: jest.fn() })
      );
  });

  it("renders without crashing", () => {
    render(<AccountsTable accountAdded={false} />);
  });
});
