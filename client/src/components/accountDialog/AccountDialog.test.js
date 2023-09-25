// client\src\components\accountDialog\AccountDialog.test.js

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AccountDialog from "./AccountDialog";

jest.mock("../accountsTable/AccountsTable.css", () => ({}));

describe("AccountDialog", () => {
  test("renders without crashing", () => {
    render(<AccountDialog />);
  });
});
