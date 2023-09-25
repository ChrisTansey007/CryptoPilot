// express-backend\controllers\getAllExchanges.js

const { ExchangeKeys } = require("../models/models");
const { fetchBalance } = require("../services/fetchBalanceData");
const { fetchLastTrade } = require("../services/fetchLastTradeData");
const AppError = require("../middlewares/errors/AppError");

async function getAllExchanges(req, res, next) {
  try {
    const allKeys = await ExchangeKeys.findAll();
    const results = await Promise.all(
      allKeys.map(async (exchange) => {
        const exchangeName = exchange.exchangeName;
        return {
          exchangeName,
          balance: await fetchBalance(exchangeName),
          lastTrade: await fetchLastTrade(exchangeName),
        };
      })
    );
    res.status(200).json(results);
  } catch (err) {
    console.error("Error fetching exchanges:", err);
    next(new AppError("Error fetching exchange keys.", 500));
  }
}

module.exports = getAllExchanges;
