// express-backend\controllers\deleteExchange.js

const { ExchangeKeys } = require("../models/models");
const AppError = require("../middlewares/errors/AppError");

async function deleteExchange(req, res, next) {
  const exchangeName = req.params.exchangeName;
  try {
    const exchange = await ExchangeKeys.findOne({ where: { exchangeName } });
    if (!exchange) {
      throw new AppError(
        `Exchange: ${exchangeName} not found in database.`,
        404
      );
    }
    await exchange.destroy();
    res
      .status(200)
      .send(`Exchange: ${exchangeName} has been deleted successfully!`);
  } catch (err) {
    next(err);
  }
}

module.exports = deleteExchange;
