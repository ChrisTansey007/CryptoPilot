// client\src\views\portfolio\Portfolio.js

import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import PortfolioComponent from "../../components/portfolioComponent/PortfolioComponent.js";
import { pieData, barData, totalBarData } from "../../data/mockData.js";

function PortfolioView() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PortfolioComponent
            pieData={pieData}
            barData={barData}
            totalBarData={totalBarData}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default PortfolioView;
