// client\src\services\mockData.js

export const randomTrades = () => Math.floor(Math.random() * 14) + 2;

export const mockTradesAreaChartData = [
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

export const mockTradesLineChartData = [
  { name: "Trade 1", uv: 4000 },
  { name: "Trade 2", uv: 3000 },
];
