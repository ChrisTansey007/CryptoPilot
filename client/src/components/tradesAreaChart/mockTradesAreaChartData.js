// client\src\components\tradesAreaChart\mockTradesAreaChartData.js

const randomTrades = () => Math.floor(Math.random() * 14) + 2;

const mockData = [
  { date: "2023-06-01", trades: randomTrades() },
  { date: "2023-06-02", trades: randomTrades() },
  { date: "2023-06-03", trades: randomTrades() },
  { date: "2023-06-04", trades: randomTrades() },
  { date: "2023-06-05", trades: randomTrades() },
  { date: "2023-06-06", trades: randomTrades() },
  { date: "2023-06-07", trades: randomTrades() },
  { date: "2023-06-08", trades: randomTrades() },
  { date: "2023-06-09", trades: randomTrades() },
  { date: "2023-06-10", trades: randomTrades() },
];
export default mockData;
