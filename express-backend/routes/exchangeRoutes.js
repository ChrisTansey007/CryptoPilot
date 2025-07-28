const express = require("express");
const router = express.Router();
const { ExchangeKeys } = require("../models/models");
const addExchange = require("../controllers/addExchange");
const AppError = require("../middlewares/errors/AppError");
const { fetchBalance } = require("../services/fetchBalanceData");
const { fetchLastTrade } = require("../services/fetchLastTradeData");
const getAllExchanges = require("../controllers/getAllExchanges");
const deleteExchange = require("../controllers/deleteExchange");
const getExchangeCredentials = require("../controllers/getExchangeCredentials");

router.post("/add", addExchange);

router.get("/", getAllExchanges);

router.delete("/:exchangeName", deleteExchange);

router.get("/:exchangeName/credentials", getExchangeCredentials);

router.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

router.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = router;
