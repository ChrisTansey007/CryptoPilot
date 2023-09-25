// client\src\components\dashboardComponent\DashboardComponent.js

import React, { useState, useEffect } from "react";
import useDataStore from "../../dataStore";
import { Grid } from "@mui/material";
import TradesLineChart from "../tradesLineChart/TradesLineChart";
import TradesAreaChart from "../tradesAreaChart/TradesAreaChart";

function DashboardComponent() {
  const [error, setError] = useState(null);
  const data = useDataStore();
  const tradesAreaChartData = data.tradesAreaChartData;
  const tradesLineChartData = data.tradesLineChartData;

  return (
    <Grid container spacing={1}>
      <Grid item xs={8} style={{ paddingLeft: 0 }}>
        <div style={{ marginLeft: -100 }}>
          <TradesAreaChart tradesAreaData={tradesAreaChartData} />
        </div>
      </Grid>
      <Grid item xs={12} style={{ paddingLeft: 0 }}>
        <div style={{ marginLeft: -65 }}>
          <TradesLineChart tradesLineData={tradesLineChartData} />
        </div>
      </Grid>
    </Grid>
  );
}

export default DashboardComponent;
