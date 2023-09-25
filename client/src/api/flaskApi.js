// client\src\api\flaskApi.js

import axios from "axios";

const BASE_URL = "http://localhost:5001/api";

const apiInstance = axios.create({
  baseURL: BASE_URL,
});

export const authenticateRobinhood = async (credentials) => {
  console.log("credentials", credentials);
  return apiInstance.post("/authenticate-robinhood", { credentials });
};
