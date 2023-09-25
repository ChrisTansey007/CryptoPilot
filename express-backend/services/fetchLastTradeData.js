// express-backend\services\fetchLastTradeData.js

const { getExchangeCredentials } = require("./fetchExchangeCredentials.js");
const {
  reAuthenticateWithRobinhood,
  handleError,
  config,
} = require("./helpers.js");
const axios = require("axios");
const fetchBalance = async (exchangeName) => {
  console.log(`Fetching balance for ${exchangeName}...`);

  try {
    const credentials = await getExchangeCredentials(exchangeName);

    if (exchangeName === "robinhood") {
      let response = await axios.get(config["ROBINHOOD_BALANCE_URL"], {
        params: credentials,
      });

      if (response.data && response.data.error === "Not logged in") {
        const isAuthenticated = await reAuthenticateWithRobinhood(credentials);

        if (isAuthenticated) {
          response = await axios.get(config["ROBINHOOD_BALANCE_URL"]);
        } else {
          return "not available";
        }
      }

      return response.data.balance;
    } else {
      return "not available";
    }
  } catch (error) {
    return handleError(error, "Error fetching balance from Flask server:");
  }
};
