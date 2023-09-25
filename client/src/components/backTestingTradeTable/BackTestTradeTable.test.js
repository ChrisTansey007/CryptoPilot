import React from "react";
import { render } from "@testing-library/react";
import BackTestTradeTable from "./BackTestTradeTable";

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
});
