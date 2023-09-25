// client\src\components\accountsComponent\AccountsComponent.js

import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import AccountsTable from "../accountsTable/AccountsTable";
import AccountDialog from "../accountDialog/AccountDialog";

function AccountsComponent() {
  const [open, setOpen] = useState(false);
  const [accountAdded, setAccountAdded] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAddAccount = (newAccount) => {
    setAccountAdded((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs={12} style={{ paddingLeft: 0 }}>
      <AccountsTable accountAdded={accountAdded} />
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Account
      </Button>
      <AccountDialog
        open={open}
        onClose={handleClose}
        onAddAccount={handleAddAccount}
      />
    </Grid>
  );
}

export default AccountsComponent;
