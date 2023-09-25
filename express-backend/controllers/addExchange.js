const axios = require("axios");
const { ExchangeKeys } = require("../models/models");

async function addExchange(req, res, next) {
  const { exchangeName, apiKey, secretKey, totp } = req.body;

  if (!exchangeName || typeof exchangeName !== "string") {
    return res
      .status(400)
      .json({ error: "exchangeName is missing or not valid" });
  }
  // this server is not running for the test to work properly
  // we need to put the token functions in the express server since they deal with that database
  //

  try {
    const url =
      exchangeName.toLowerCase() === "robinhood"
        ? "http://localhost:5001/api/authenticate-robinhood"
        : "http://localhost:5001/api/authenticate-other-exchange";

    const flaskResponse = await axios.post(url, {
      credentials: {
        apiKey,
        secretKey,
        totp,
      },
    });

    if (!flaskResponse.data.success) {
      throw new Error(
        `Failed to authenticate with ${exchangeName} on Flask server.`
      );
    }

    const token = flaskResponse.data.token;

    const [exchange, created] = await ExchangeKeys.findOrCreate({
      where: { exchangeName },
      defaults: { apiKey, secretKey, totp, token },
    });

    if (!created) {
      exchange.apiKey = apiKey;
      exchange.secretKey = secretKey;
      exchange.totp = totp;
      exchange.token = token;
      await exchange.save();
    }

    res
      .status(200)
      .send(
        `Keys have been set and ${exchangeName} authentication successful!`
      );
  } catch (error) {
    console.error(
      `Error during authentication process for exchange: ${exchangeName}`,
      error
    );
    next(error);
  }
}

module.exports = addExchange;
