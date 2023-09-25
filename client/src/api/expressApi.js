// client\src\api\api.js

import axios from "axios";

const BASE_URL = "http://localhost:5002/api";

const apiInstance = axios.create({
  baseURL: BASE_URL,
});

export const fetchExchangeAccounts = async () => {
  return apiInstance.get("/exchanges");
};

export const deleteExchangeAccount = async (exchangeName) => {
  return apiInstance.delete(`/exchanges/${exchangeName}`);
};

export const addNewExchangeAccount = async (newExchange) => {
  return apiInstance.post("/exchanges/add", newExchange);
};

export const fetchExchangeAccountCredentials = async (exchangeName) => {
  return apiInstance.get(`/exchanges/${exchangeName}/credentials`);
};
