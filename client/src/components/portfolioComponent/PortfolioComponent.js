// client\src\components\portfolio\PortfolioComponent.js

import React, { useState, useMemo } from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import InvestmentPieChart from "../investmentPieChart/InvestmentPieChart";
import InvestmentBarChart from "../investmentBarChart/InvestmentBarChart";
import TotalInvestmentBarChart from "../totalInvestmentBarChart/TotalInvestmentBarChart";
import PortfolioDonutChart from "../portfolioDonutChart/PortfolioDonutChart";
import PortfolioStackedBarChart from "../portfolioStackedBarChart/PortfolioStackedBarChart";

function PortfolioComponent({ pieData, barData, totalBarData }) {
  const [selectedInvestment, setSelectedInvestment] = useState(
    barData?.[0]?.type || null
  );
  const filteredData = useMemo(() => {
    if (selectedInvestment && barData) {
      const filtered = barData.filter(
        (data) => data.type === selectedInvestment
      );
      return filtered;
    } else {
      return [];
    }
  }, [selectedInvestment, barData]);

  const handleInvestmentSelection = (investment) => {
    setSelectedInvestment(investment);
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={6} sx={{ marginLeft: 0, marginTop: 0, display: "flex" }}>
        <InvestmentPieChart
          data={pieData}
          onSelectInvestment={handleInvestmentSelection}
        />
      </Grid>
      <Grid item xs={6}>
        {selectedInvestment ? <InvestmentBarChart data={filteredData} /> : null}
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ paddingLeft: 0, paddingRight: 0, display: "flex", marginTop: 0 }}
      >
        <TotalInvestmentBarChart data={totalBarData} />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ paddingLeft: 0, paddingRight: 0, display: "flex", marginTop: 0 }}
      >
        <PortfolioDonutChart />
        <PortfolioStackedBarChart />
      </Grid>
    </Grid>
  );
}

PortfolioComponent.propTypes = {
  pieData: PropTypes.arrayOf(PropTypes.object),
  barData: PropTypes.arrayOf(PropTypes.object),
  totalBarData: PropTypes.arrayOf(PropTypes.object),
};

export default PortfolioComponent;
