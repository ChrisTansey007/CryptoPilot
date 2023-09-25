// client/src/components/botsComponent/BotsComponent.test.js

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BotsComponent from "./BotsComponent";

jest.mock("../botAttributeComponent/BotAttributeComponent", () => (props) => (
  <div data-testid="bot-attribute">{JSON.stringify(props)}</div>
));
jest.mock("../botListComponent/BotListComponent", () => (props) => (
  <div
    data-testid="bot-list"
    onClick={() => props.onSelectBot({ id: 1, name: "Test Bot" })}
  >
    Bot List
  </div>
));

describe("<BotsComponent />", () => {
  it("loads without crashing", () => {
    const { getByText, queryByTestId } = render(<BotsComponent />);
    expect(getByText("Bot List")).toBeTruthy();
    expect(queryByTestId("bot-attribute")).toBeNull();
  });

  it("displays bot attributes when a bot is selected", () => {
    const { getByTestId, getByText } = render(<BotsComponent />);
    fireEvent.click(getByText("Bot List"));

    const botAttributeComponent = getByTestId("bot-attribute");
    expect(botAttributeComponent).toBeTruthy();
    expect(botAttributeComponent.textContent).toContain(
      '{"bot":{"id":1,"name":"Test Bot"}}'
    );
  });
});
