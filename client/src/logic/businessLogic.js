// client\src\logic\businessLogic.js

import {
  fetchExchangeAccounts,
  deleteExchangeAccount,
  addNewExchangeAccount,
} from "../api/expressApi";
import { authenticateRobinhood } from "../api/flaskApi";
import crypto from "crypto-js";

export const getAccounts = async () => {
  try {
    const response = await fetchExchangeAccounts();
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAccount = async (exchangeName) => {
  try {
    const response = await deleteExchangeAccount(exchangeName);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const handleRobinhoodAuthentication = async (
  apiKey,
  secretKey,
  totp
) => {
  console.log("handleRobinhoodAuthentication ...");
  return authenticateRobinhood({ apiKey, secretKey, totp });
};

export const addNewAccount = async (apiKey, secretKey, totp, exchangeName) => {
  const encryptedSecretKey = crypto.AES.encrypt(
    secretKey,
    "secret key 123"
  ).toString();
  const credentialType = exchangeName === "robinhood" ? "username" : "apiKey";
  const newExchange = {
    credentialType: credentialType,
    exchangeName: exchangeName,
    apiKey: apiKey,
    secretKey: encryptedSecretKey,
    totp: totp,
  };
  return addNewExchangeAccount(newExchange);
};

export const fetchAccountsTableData = async () => {
  try {
    const fetchedAccounts = await fetchExchangeAccounts();
    console.log("fetchedAccounts -  ", fetchedAccounts);
    if (Array.isArray(fetchedAccounts.data)) {
      return { data: fetchedAccounts.data, error: null };
    } else {
      console.error("API response is not an array:", fetchedAccounts);
      return {
        data: null,
        error:
          "Error fetching exchange accounts. Invalid data format received.",
      };
    }
  } catch (error) {
    console.error("Error fetching exchange accounts:", error);
    return { data: null, error: "Error fetching exchange accounts!" };
  }
};

export const deleteAccountFromTable = async (exchangeName) => {
  try {
    console.log("exchange to be deleted - ", exchangeName);
    const responseMessage = await deleteExchangeAccount(exchangeName);
    console.log(responseMessage);
    return { success: true, error: null };
  } catch (error) {
    console.error("Error deleting account:", error);
    return { success: false, error: "Error deleting account!" };
  }
};

export const handleError = (error) => {
  console.error("Error:", error);
  return "An error occurred!";
};

export const processExchangeNameChange = (selectedOption) => {
  if (selectedOption) {
    return selectedOption.value;
  } else {
    console.log("selectedOption is undefined");
    return null;
  }
};
export const processSubmission = async (
  apiKey,
  secretKey,
  exchangeName,
  totp
) => {
  if (!apiKey || !secretKey || !exchangeName) {
    return {
      success: false,
      message: "API key, Secret key, and Exchange name are required.",
    };
  }

  if (exchangeName === "robinhood") {
    console.log("making an api request to: /api/authenticate-robinhood");
    try {
      const authResponse = await handleRobinhoodAuthentication(
        apiKey,
        secretKey,
        totp
      );
      console.log(
        "request sent to the python server to authenticate robinhood"
      );
      console.log("authResponse.data", authResponse.data);
      console.log(
        "authResponse.data.authenticated",
        authResponse.data.authenticated
      );

      if (!authResponse.data || !authResponse.data.success) {
        return {
          success: false,
          message: "Error during Robinhood authentication.",
        };
      }
    } catch (error) {
      console.error("Error during Robinhood authentication:", error);
      return {
        success: false,
        message: "Error during Robinhood authentication.",
      };
    }
  }

  try {
    await addNewAccount(apiKey, secretKey, totp, exchangeName);
    console.log("Exchange added successfully:", exchangeName);
    return {
      success: true,
      message: "Account added successfully!",
    };
  } catch (error) {
    console.log("Error adding account:", error);
    return {
      success: false,
      message: "Error adding account.",
    };
  }
};
