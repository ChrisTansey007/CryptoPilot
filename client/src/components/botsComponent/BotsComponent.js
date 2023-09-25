// client\src\components\botsComponent\BotsComponent.js

import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import BotAttributeComponent from "../botAttributeComponent/BotAttributeComponent";
import BotListComponent from "../botListComponent/BotListComponent";

function BotsComponent() {
  const [selectedBot, setSelectedBot] = useState(null);

  const handleBotSelection = (bot) => {
    setSelectedBot(bot);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={4} style={{ paddingLeft: 0 }}>
        <Button
          variant="contained"
          style={{ borderRadius: 50, marginBottom: "50px" }}
          onClick={() => console.log("Create New Bot button clicked.")}
        ></Button>
        <BotListComponent onSelectBot={handleBotSelection} />
      </Grid>
      <Grid
        item
        xs={8}
        style={{
          paddingLeft: 50,
          paddingRight: 0,
          display: "flex",
          marginLeft: 0,
        }}
      >
        {selectedBot ? <BotAttributeComponent bot={selectedBot} /> : null}
      </Grid>
    </Grid>
  );
}

export default BotsComponent;
