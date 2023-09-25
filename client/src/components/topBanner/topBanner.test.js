// client\src\components\topBanner\topBanner.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TopBanner from "./TopBanner";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../store.js", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    isAuthenticated: true,
    setAuthenticated: jest.fn(),
  }),
}));

jest.mock("../loginDialog/LoginDialog", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue(null),
}));

jest.mock("../registerDialog/RegisterDialog", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue(null),
}));

jest.mock("../validatedTextField/ValidatedTextField", () => {
  return function DummyValidatedTextField(props) {
    return <input data-testid="mockedValidatedTextField" {...props} />;
  };
});

describe("TopBanner Component", () => {
  test("renders TopBanner without crashing", () => {
    render(
      <MemoryRouter>
        <TopBanner />
      </MemoryRouter>
    );
    const linkElement = screen.getByText(/Crypto Pilot/i);
    expect(linkElement).toBeInTheDocument();
  });
});
