// client\src\components\botListComponent\BotListComponent.js

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import BotAttributeComponent from "../botAttributeComponent/BotAttributeComponent";

const botStatus = "Active";
function BotListComponent(props) {
  const [selectedBot, setSelectedBot] = useState("");

  const bots = [
    { botName: "BTC/USD_Kraken_KISS", active: botStatus },
    { botName: "BTC/ETH_Binance_TOKPIG", active: botStatus },
    { botName: "BTC/USD_Kraken_TOKPIG", active: botStatus },
    { botName: "BTC/ETH_Binance_KISS", active: botStatus },
  ];

  return (
    <div>
      <TableContainer component={Paper} style={{ width: "100%" }}>
        <Table style={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Bot Name</TableCell>
              <TableCell align="right">Active</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bots.map((bot) => (
              <TableRow
                key={bot.botName}
                onClick={() => {
                  props.onSelectBot(bot);
                  setSelectedBot(bot);
                }}
              >
                <TableCell component="th" scope="row">
                  {bot.botName}
                </TableCell>
                <TableCell align="right">{bot.active}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedBot && (
        <div>
          <h2>Selected Bot:</h2>
          <BotAttributeComponent bot={selectedBot} />
        </div>
      )}
    </div>
  );
}

export default BotListComponent;
