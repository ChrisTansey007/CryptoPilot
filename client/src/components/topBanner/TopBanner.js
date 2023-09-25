// client\src\components\topBanner\TopBanner.js

import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)({
  background: "#FF5700",
  position: "sticky",
  top: 0,
  zIndex: 1300,
});

const StyledLink = styled(RouterLink)({
  textDecoration: "none",
});

const StyledButton = styled(Button)({
  color: "#FFFFFF",
});

const TopBanner = () => {
  const navigate = useNavigate();

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Crypto Pilot
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default TopBanner;
