// client\src\components\backTestingComponent\BackTestingComponent.js

import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import BackTestingLineChart from "../backTestingLineChart/BackTestingLineChart";
import BackTestingMonthlyBarChart from "../backTestingMonthlyBarChart/BackTestingMonthlyBarChart";
import BackTestTradeTable from "../backTestingTradeTable/BackTestTradeTable";
import BackTestDetails from "../backTestDetails/BackTestDetails";

const BackTestDetailsPlaceholder = () => (
  <div data-testid="backtest-details-placeholder">
    BackTestDetails is under development.
  </div>
);

function BackTestingComponent({ backTestData }) {
  const [selectedTrade, setSelectedTrade] = useState(null);
  const [strategyDetails, setStrategyDetails] = useState(null);

  useEffect(() => {
    if (backTestData && backTestData.length > 0) {
      const firstData = backTestData[0];
      setSelectedTrade(firstData || null);
      setStrategyDetails(firstData?.strategyDetails || null);
    } else {
      setSelectedTrade(null);
      setStrategyDetails(null);
    }
  }, [backTestData]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <BackTestingLineChart />
      </Grid>
      <Grid item xs={6}>
        <BackTestingMonthlyBarChart />
      </Grid>
      <Grid item xs={12}>
        <BackTestTradeTable selectedTrade={selectedTrade} />
      </Grid>
      <Grid item xs={12}>
        <BackTestDetailsPlaceholder strategyDetails={strategyDetails} />
      </Grid>
    </Grid>
  );
}

BackTestingComponent.propTypes = {
  backTestData: PropTypes.arrayOf(PropTypes.object),
};

export default BackTestingComponent;
