// express-backend\controllers\getExchangeCredentials.js

const { ExchangeKeys } = require("../models/models");
const AppError = require("../middlewares/errors/AppError");

async function getExchangeCredentials(req, res, next) {
  const exchangeName = req.params.exchangeName;
  try {
    const credentials = await ExchangeKeys.findOne({ where: { exchangeName } });
    if (!credentials) {
      throw new AppError(
        `No credentials found for exchange: ${exchangeName}.`,
        404
      );
    }
    res.status(200).json(credentials);
  } catch (err) {
    next(
      new AppError(
        `Error retrieving credentials for exchange: ${exchangeName}.`,
        500
      )
    );
  }
}

module.exports = getExchangeCredentials;
