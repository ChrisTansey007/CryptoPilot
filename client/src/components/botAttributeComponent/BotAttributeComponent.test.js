// client/src/components/botAttributeComponent/BotAttributeComponent.test.js

import React from "react";
import { render } from "@testing-library/react";
import BotAttributeComponent from "./BotAttributeComponent";
import sampleData from "./mockBotAttributeComponentData";

describe("<BotAttributeComponent />", () => {
  it("loads without crashing", () => {
    const mockBot = { botName: "SampleBot" };
    render(<BotAttributeComponent bot={mockBot} />);
  });
});
