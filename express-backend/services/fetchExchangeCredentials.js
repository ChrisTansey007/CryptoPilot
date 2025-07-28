// express-backend\services\fetchExchangeCredentials.js

const { ExchangeKeys } = require("../models/models");

async function getExchangeCredentials(exchangeName) {
  const exchange = await ExchangeKeys.findOne({ where: { exchangeName } });

  if (!exchange) {
    throw new Error(`Exchange: ${exchangeName} not found in database.`);
  }

  const credentials = {
    apiKey: exchange.apiKey,
    secretKey: exchange.secretKey,
    totp: exchange.totp,
  };

  return credentials;
}

module.exports = { getExchangeCredentials };
