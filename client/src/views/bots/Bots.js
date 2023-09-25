// client\src\views\bots\Bots.js

import React from "react";
import { Grid } from "@mui/material";
import BotsComponent from "../../components/botsComponent/BotsComponent";

const Bots = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BotsComponent />
        </Grid>
      </Grid>
    </div>
  );
};

export default Bots;
