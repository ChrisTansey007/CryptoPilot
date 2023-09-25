// client\src\services\dataService.js

import axios from "axios";
import { mockTradesAreaChartData, mockTradesLineChartData } from "./mockData";

const API_URL = "http://localhost:5001/api/users/";

export const fetchTradesFromAPI = async () => {
  return mockTradesAreaChartData, mockTradesLineChartData;
};

export const authenticateLogin = async (username, password) => {
  console.log(`Logging in user: ${username}`);
  const response = await axios.post(API_URL + "login", {
    username,
    password,
  });
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log("Login successful, data stored in local storage");
    return { success: true, username: response.data.username };
  } else {
    return { success: false, message: "Login failed" };
  }
};

export const registerUser = async (username, password) => {
  console.log(`Registering user: ${username}`);
  const response = await axios.post(API_URL + "register", {
    username,
    password,
  });
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log("Registration successful, data stored in local storage");
    return { success: true, username: response.data.username };
  } else {
    return { success: false, message: "Registration failed" };
  }
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};
