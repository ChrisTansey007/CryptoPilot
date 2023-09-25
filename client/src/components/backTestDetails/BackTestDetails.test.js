// client\src\components\backTestDetails\BackTestDetails.test.js

import React from "react";
import { render } from "@testing-library/react";
import BackTestTradeTable from "./BackTestDetails";

const dummyData = [
  {
    tradeNumber: 1,
    tradedDateTime: "2023-08-30 12:00:00",
    buySide: 100,
    sellSide: 110,
    marginalGain: 10,
  },
];

describe("BackTestTradeTable Component", () => {
  it("loads without crashing", () => {
    const { unmount } = render(<BackTestTradeTable data={dummyData} />);
    unmount();
  });

  it("returns a loading message if data prop is not an array", () => {
    const { getByText } = render(<BackTestTradeTable data="invalid_data" />);
    expect(getByText("Loading...")).toBeTruthy();
  });
});
