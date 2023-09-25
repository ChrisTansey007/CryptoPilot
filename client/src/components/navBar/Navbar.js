// client\src\components\navBar\Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import useStore from "../../store";

const drawerWidth = 50;

const NavbarStyles = styled(Drawer)({
  width: `${drawerWidth}px`,
  flexShrink: 0,
  whiteSpace: "nowrap",
  marginTop: "64px",
});

const DrawerPaper = styled("div")({
  width: `${drawerWidth}px`,
  background: "#fff",
  margin: "64px",
  height: "calc(100% - 64px)",
});

const CenteredListItemText = styled(ListItemText)({
  textAlign: "center",
});

const Navbar = () => {
  return (
    <NavbarStyles variant="permanent" open>
      <DrawerPaper>
        <List>
          {["Dashboard", "Bots", "Portfolio", "Backtesting", "Accounts"].map(
            (text, index) => (
              <ListItem
                key={text}
                component={Link}
                to={`/${text.toLowerCase()}`}
              >
                <CenteredListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </DrawerPaper>
    </NavbarStyles>
  );
};

export default Navbar;
