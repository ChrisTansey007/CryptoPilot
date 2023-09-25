import React from "react";
import { render, fireEvent } from "@testing-library/react";
import OTPDialog, { handleOtpSubmit } from "./OptDialog";

jest.mock("@mui/material/Dialog", () => {
  return ({ children }) => {
    return <div>{children}</div>;
  };
});

const mockHandleOtpSubmit = jest.fn();
jest.mock("./OptDialog", () => {
  const originalModule = jest.requireActual("./OptDialog");

  return {
    __esModule: true,
    ...originalModule,
    handleOtpSubmit: mockHandleOtpSubmit,
  };
});

describe("<OTPDialog />", () => {
  it("renders without crashing", () => {
    render(<OTPDialog />);
  });
});
