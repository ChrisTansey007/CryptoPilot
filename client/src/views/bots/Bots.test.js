// client/src/views/Bots/Bots.test.js

import React from "react";
import { render } from "@testing-library/react";
import Bots from "./Bots";
import "@testing-library/jest-dom/extend-expect";

jest.mock("@mui/material", () => ({
  Grid: jest.fn(({ children }) => <div>{children}</div>),
}));

jest.mock("../../components/botsComponent/BotsComponent", () => {
  return jest.fn(() => <div>Mocked BotsComponent</div>);
});

describe("Bots component", () => {
  it("renders Bots component without crashing", () => {
    render(<Bots />);
  });

  it("renders the BotsComponent", () => {
    const { getByText } = render(<Bots />);
    expect(getByText("Mocked BotsComponent")).toBeInTheDocument();
  });
});
