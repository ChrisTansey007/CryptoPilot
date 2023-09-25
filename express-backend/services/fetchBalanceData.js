// express-backend\services\fetchBalanceData.js

const { getExchangeCredentials } = require("./fetchExchangeCredentials.js");
const {
  reAuthenticateWithRobinhood,
  handleError,
  config,
} = require("./helpers.js");
const axios = require("axios");

const fetchLastTrade = async (exchangeName) => {
  console.log(`Fetching last trade for ${exchangeName}...`);

  try {
    if (exchangeName === "robinhood") {
      let response = await axios.get(config["ROBINHOOD_LAST_TRADE_URL"]);

      if (response.data && response.data.error === "Not logged in") {
        const credentials = await getExchangeCredentials(exchangeName);
        const isAuthenticated = await reAuthenticateWithRobinhood(credentials);

        if (isAuthenticated) {
          response = await axios.get(config["ROBINHOOD_LAST_TRADE_URL"]);
        } else {
          return "not available";
        }
      }

      return response.data;
    } else {
      return "not available";
    }
  } catch (error) {
    return handleError(
      error,
      `Failed to fetch last trade for ${exchangeName}. Error:`
    );
  }
};
