import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ValidatedTextField from "./ValidatedTextField";

describe("TradesLineChart", () => {
  test("renders without crashing", () => {
    render(<ValidatedTextField />);
  });
});
