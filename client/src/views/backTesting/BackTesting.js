// client\src\views\backTesting\BackTesting.js

import React, { useState, useEffect } from "react";
import BackTestTradeTable from "../../components/backTestingTradeTable/BackTestTradeTable";
import BackTestDetails from "../../components/backTestDetails/BackTestDetails";
import BackTestingLineChart from "../../components/backTestingLineChart/BackTestingLineChart";
import BackTestingMonthlyBarChart from "../../components/backTestingMonthlyBarChart/BackTestingMonthlyBarChart";

const BackTesting = () => {
  const [backTestDetails, setBackTestDetails] = useState(null);
  const [backTestTradeData, setBackTestTradeData] = useState(null);
  const [backTestLineChartData, setBackTestLineChartData] = useState(null);
  const [backTestBarChartData, setBackTestBarChartData] = useState(null);

  useEffect(() => {
    setBackTestDetails({
      backTestName: "Backtest 1",
      Status: "Completed",
      Strategy: "Strategy 1",
      initialDeposit: 10000,
      profitLossToDate: 2000,
      finalBalance: 12000,
      tradingExchange: "Exchange 1",
      currencyPair: "Currency Pair 1",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      totalTrades: 500,
      totalBuys: 250,
      totalSells: 250,
      finalPosition: "Sell",
    });

    setBackTestTradeData([
      {
        tradeNumber: "Trade 1",
        tradedDateTime: "2023-01-01 00:00",
        buySide: 5000,
        sellSide: 6000,
        marginalGain: 1000,
      },
    ]);

    setBackTestLineChartData([
      { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    ]);

    setBackTestBarChartData([
      { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    ]);
  }, []);

  return (
    <div>
      <BackTestDetails backTest={backTestDetails} />
      <BackTestingLineChart data={backTestLineChartData} />
      <BackTestingMonthlyBarChart data={backTestBarChartData} />
      <BackTestTradeTable data={backTestTradeData} />
    </div>
  );
};

export default BackTesting;
