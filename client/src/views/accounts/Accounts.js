// client\src\views\accounts\Accounts.js

import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import AccountsComponent from "../../components/accountsComponent/AccountsComponent";

function Accounts() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={11}>
          <AccountsComponent />
        </Grid>
      </Grid>
    </div>
  );
}

export default Accounts;
