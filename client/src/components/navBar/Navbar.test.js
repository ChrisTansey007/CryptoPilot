// client\src\components\navBar\Navbar.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // to mock the router context
import Navbar from "./Navbar";
import "@testing-library/jest-dom/extend-expect";

describe("Navbar Component", () => {
  test("renders Navbar without crashing", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  const links = ["Dashboard", "Bots", "Portfolio", "Backtesting", "Accounts"];
  links.forEach((link) => {
    test(`contains link to ${link}`, () => {
      render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      );
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
    });
  });

  links.forEach((link) => {
    test(`link for ${link} has correct href`, () => {
      render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      );
      const linkElement = screen.getByText(link).closest("a");
      expect(linkElement).toHaveAttribute("href", `/${link.toLowerCase()}`);
    });
  });
});
