const Sequelize = require("sequelize");
const path = require("path");

// Load environment variables from the project root
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DATABASE_PATH,
  logging: false,
});

const ExchangeKeys = sequelize.define("ExchangeKeys", {
  exchangeName: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  apiKey: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  secretKey: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  totp: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  token: {
    // New field to store the Robinhood token
    type: Sequelize.STRING,
    allowNull: true,
  },
  tokenExpiry: {
    // New field to store token expiry time
    type: Sequelize.DATE,
    allowNull: true,
  },
  tokenObtainedDate: {
    // (Optional) field to store when the token was obtained
    type: Sequelize.DATE,
    allowNull: true,
  },
});

module.exports = {
  sequelize,
  ExchangeKeys,
};
