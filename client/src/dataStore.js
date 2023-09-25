import { useState, useEffect } from "react";
import {
  mockTradesAreaChartData,
  mockTradesLineChartData,
} from "./services/mockData";

const useDataStore = () => {
  const [data, setData] = useState({
    tradesAreaChartData: [],
    tradesLineChartData: [],
  });

  useEffect(() => {
    setData({
      tradesAreaChartData: mockTradesAreaChartData,
      tradesLineChartData: mockTradesLineChartData,
    });
  }, []);

  return data;
};

export default useDataStore;
