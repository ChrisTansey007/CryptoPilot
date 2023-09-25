// client\src\store.js

import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import produce from "immer";
import {
  fetchTradesFromAPI,
  authenticateLogin,
  registerUser,
} from "./services/dataService";
import {
  mockTradesAreaChartData,
  mockTradesLineChartData,
} from "./services/mockData";

export const useStore = create(
  subscribeWithSelector((set) => ({
    state: {
      tradesAreaData: mockTradesAreaChartData,
      tradesLineData: mockTradesLineChartData,
      accounts: [],
      username: null,
      isAuthenticated: false,
    },

    actions: (get) => ({
      set: (fn) => {
        set(produce(fn));
      },

      fetchTrades: async () => {
        const trades = await fetchTradesFromAPI();
        get().set((state) => {
          state.trades = trades;
        });
      },

      addAccount: (account) => {
        get().set((state) => {
          state.accounts.push(account);
        });
      },

      editAccount: (accountId, updatedAccount) => {
        get().set((state) => {
          const index = state.accounts.findIndex((a) => a.id === accountId);
          state.accounts[index] = updatedAccount;
        });
      },

      deleteAccount: (accountId) => {
        get().set((state) => {
          state.accounts = state.accounts.filter((a) => a.id !== accountId);
        });
      },

      login: async (username, password) => {
        const response = await authenticateLogin(username, password);

        if (response.success) {
          get().set({
            isAuthenticated: true,
            username: response.username,
          });
        }
      },

      register: async (username, email, password) => {
        const response = await registerUser(username, email, password);

        if (response.success) {
          get().set({
            isAuthenticated: true,
            username: response.username,
          });
        }
      },
    }),
  }))
);
