import React from "react";
import { Typography, Button } from "@mui/material";
import getSampleData from "./mockBotAttributeComponentData";

function BotAttributeComponent({ bot }) {
  const botData = getSampleData(bot.botName);
  bot = botData;
  if (!bot) {
    return <div data-testid="bot-attribute-placeholder">No bot selected</div>;
  }

  return (
    <div data-testid="bot-attribute">
      <Typography variant="h6" component="div">
        <span data-testid="bot-name">{bot.botName}</span>
        <Button
          variant="outlined"
          color="primary"
          data-testid="bot-start-button"
        >
          Start Bot
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          data-testid="bot-history-button"
        >
          View History Log
        </Button>
      </Typography>
      <Typography
        variant="body1"
        component="div"
        data-testid="bot-financial-data"
      >
        Financial Data:
        <ul>
          <li>Available Balance: {bot.availableBalance}</li>
          <li>Open Order: {bot.openOrder}</li>
          <li>Total Balance: {bot.totalBalance}</li>
        </ul>
      </Typography>
      <Typography
        variant="body1"
        component="div"
        data-testid="bot-trading-data"
      >
        Trading Data:
        <ul>
          <li>Trade Count: {bot.tradeCount}</li>
          <li>Last Trade: {bot.lastTrade}</li>
          <li>Profit/Loss: {bot.profitLoss}</li>
        </ul>
      </Typography>
    </div>
  );
}

export default BotAttributeComponent;
