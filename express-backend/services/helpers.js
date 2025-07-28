// express-backend\services\helpers.js

const axios = require("axios");

// Build service URLs from environment variables so deployments can override
const FLASK_SERVER_URL = process.env.FLASK_SERVER_URL || "http://localhost:5001";

const config = {
  ROBINHOOD_BALANCE_URL:
    process.env.ROBINHOOD_BALANCE_URL ||
    `${FLASK_SERVER_URL}/api/robinhood-balance`,
  ROBINHOOD_LAST_TRADE_URL:
    process.env.ROBINHOOD_LAST_TRADE_URL ||
    `${FLASK_SERVER_URL}/api/robinhood-last-trade`,
  ROBINHOOD_AUTHENTICATE_URL:
    process.env.ROBINHOOD_AUTHENTICATE_URL ||
    `${FLASK_SERVER_URL}/api/authenticate-robinhood`,
};

const reAuthenticateWithRobinhood = async (credentials) => {
  try {
    const authResponse = await axios.post(
      config.ROBINHOOD_AUTHENTICATE_URL,
      credentials
    );
    if (authResponse.data && authResponse.data.authenticated) {
      return true;
    } else {
      console.error("Failed to re-authenticate with Robinhood.");
      return false;
    }
  } catch (error) {
    console.error("Error during Robinhood re-authentication:", error);
    return false;
  }
};

const handleError = (error, message) => {
  console.error(message, error);
  return "not available";
};

module.exports = { reAuthenticateWithRobinhood, handleError, config };
