// client\src\components\backTestingMonthlyBarChart\BackTestingMonthlyBarChart.test.js

import React from "react";
import { render } from "@testing-library/react";
import BackTestingMonthlyBarChart from "./BackTestingMonthlyBarChart";

const dummyChartData = [
  {
    name: "Jan",
    profit: 100,
    loss: -50,
  },
  {
    name: "Feb",
    profit: 150,
    loss: -30,
  },
];

describe("BackTestingMonthlyBarChart", () => {
  it("loads without crashing", () => {
    const { unmount } = render(
      <BackTestingMonthlyBarChart data={dummyChartData} />
    );
    unmount();
  });
});
