// client\src\components\backTestingLineChart\BackTestingLineChart.test.js

import React from "react";
import { render } from "@testing-library/react";
import BackTestingLineChart from "./BackTestingLineChart";

const dummyTradeData = [
  {
    name: "Trade 1",
    value: 100,
  },
  {
    name: "Trade 2",
    value: 120,
  },
];

describe("BackTestingLineChart Component", () => {
  it("loads without crashing", () => {
    const { unmount } = render(
      <BackTestingLineChart tradeData={dummyTradeData} />
    );
    unmount();
  });

  it("returns null if no tradeData is provided", () => {
    const { container } = render(<BackTestingLineChart tradeData={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
