// client\src\views\dashboard\Dashboard.js

import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import DashboardComponent from "../../components/dashboardComponent/DashboardComponent";

function Dashboard() {
  return (
    <div>
      <Grid container spacing={3}>
        {" "}
        <Grid item xs={11}>
          {" "}
          <DashboardComponent />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
