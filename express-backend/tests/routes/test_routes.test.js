// express-backend\tests\routes\test.js

const axios = require("axios");
const request = require("supertest");
const app = require("../../app");
const { sequelize } = require("../../models/models");
const addExchange = require("../../controllers/addExchange");

jest.mock("axios");
jest.mock("uuid", () => {
  return {
    v4: jest.fn(() => "mocked-uuid-v4"),
  };
});

jest.mock("../../services/fetchBalanceData", () => ({
  fetchBalance: jest.fn(() => Promise.resolve("mockBalance")),
}));
jest.mock("../../services/fetchLastTradeData", () => ({
  fetchLastTrade: jest.fn(() => Promise.resolve("mockLastTrade")),
}));

const { fetchBalance } = require("../../services/fetchBalanceData");
const { fetchLastTrade } = require("../../services/fetchLastTradeData");

axios.post.mockResolvedValue({
  data: {
    success: true,
    token: "sampleToken",
  },
});

const EXCHANGE_ROUTE_PREFIX = "/api/exchanges";
const exchangeData = {
  exchangeName: "exampleExchange",
  apiKey: "exampleApiKey",
  secretKey: "exampleSecretKey",
  totp: "exampleTOTP",
};

let server;
const PORT = process.env.PORT || 5003;

beforeAll(async () => {
  try {
    server = app.listen(PORT);
  } catch (error) {
    console.error("Error starting the server:", error);
  }
});

beforeEach(async () => {
  try {
    await request(app).post(`${EXCHANGE_ROUTE_PREFIX}/add`).send(exchangeData);
  } catch (error) {
    console.error("Error in beforeEach setup:", error);
  }
});

afterEach(async () => {
  try {
    await request(app).delete(
      `${EXCHANGE_ROUTE_PREFIX}/${exchangeData.exchangeName}`
    );
    jest.clearAllMocks();
  } catch (error) {
    console.error("Error in afterEach cleanup:", error);
  }
});

afterAll(async () => {
  try {
    await server.close();
    await sequelize.close();
  } catch (error) {
    console.error("Error in afterAll cleanup:", error);
  }
});

describe("Server Routes", () => {
  it("checks for non-existent routes", async () => {
    try {
      const res = await request(app).get(
        `${EXCHANGE_ROUTE_PREFIX}/nonExistentRoute`
      );
      expect(res.statusCode).toEqual(404);
    } catch (error) {
      console.error("Error in test:", error);
    }
  });

  it("checks adding an exchange", async () => {
    const mockReq = {
      body: {
        exchangeName: "exampleExchange",
        apiKey: "exampleApiKey",
        secretKey: "exampleSecretKey",
        totp: "exampleTOTP",
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    const mockNext = jest.fn();

    try {
      await addExchange(mockReq, mockRes, mockNext);
      expect(mockRes.send).toHaveBeenCalledWith(
        `Keys have been set and ${mockReq.body.exchangeName} authentication successful!`
      );
    } catch (error) {
      console.error("Error in test:", error);
    }
  });

  it("fetches all exchanges", async () => {
    try {
      const res = await request(app).get(`${EXCHANGE_ROUTE_PREFIX}/`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Array);

      for (const exchange of res.body) {
        expect(exchange.balance).toEqual("mockBalance");
        expect(exchange.lastTrade).toEqual("mockLastTrade");
        expect(fetchBalance).toHaveBeenCalled();
        expect(fetchLastTrade).toHaveBeenCalled();
      }
    } catch (error) {
      console.error("Error in test:", error);
    }
  });

  it("deletes an exchange by name", async () => {
    const exchangeName = "exampleExchange";

    try {
      const deleteRes = await request(app).delete(
        `${EXCHANGE_ROUTE_PREFIX}/${exchangeName}`
      );
      expect(deleteRes.statusCode).toEqual(200);
      expect(deleteRes.text).toEqual(
        `Exchange: ${exchangeName} has been deleted successfully!`
      );

      const fetchRes = await request(app).get(`${EXCHANGE_ROUTE_PREFIX}/`);
      const remainingExchangeNames = fetchRes.body.map(
        (exchange) => exchange.name
      );
      expect(remainingExchangeNames).not.toContain(exchangeName);
    } catch (error) {
      console.error("Error in test:", error);
    }
  });

  it("fetches credentials for a specific exchange", async () => {
    const exchangeName = "exampleExchange";

    try {
      const res = await request(app).get(
        `${EXCHANGE_ROUTE_PREFIX}/${exchangeName}/credentials`
      );
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("apiKey", "exampleApiKey");
      expect(res.body).toHaveProperty("secretKey", "exampleSecretKey");
      expect(res.body).toHaveProperty("totp", "exampleTOTP");
    } catch (error) {
      console.error("Error in test:", error);
    }
  });
});
