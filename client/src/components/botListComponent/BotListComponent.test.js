// client/src/components/botListComponent/BotListComponent.test.js

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BotListComponent from "./BotListComponent";

describe("<BotListComponent />", () => {
  it("loads without crashing", () => {
    const { getByText } = render(<BotListComponent />);
    expect(getByText("BTC/USD_Kraken_KISS")).toBeTruthy();
  });

  it("displays the correct number of bots", () => {
    const { getAllByRole } = render(<BotListComponent />);
    const rows = getAllByRole("row");
    expect(rows).toHaveLength(5);
  });
});
