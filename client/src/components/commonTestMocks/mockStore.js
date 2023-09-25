// mockStore.js

import { jest } from "@jest/globals";

export const mockStore = (overrides = {}) => {
  const defaultStore = {
    trades: [],
    fetchTrades: jest.fn(),
    accounts: [],
    setAccount: jest.fn(),
    addAccount: jest.fn(),
    editAccount: jest.fn(),
    deleteAccount: jest.fn(),
    isAuthenticated: false,
    setAuthenticated: jest.fn(),
    username: null,
    error: null,
    setError: jest.fn(),
    login: jest.fn(),
    register: jest.fn(),
    logout: jest.fn(),
  };

  return { ...defaultStore, ...overrides };
};
