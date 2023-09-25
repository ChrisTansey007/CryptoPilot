// //client\src\app\App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../views/dashboard/Dashboard";
import Bots from "../views/bots/Bots";
import Portfolio from "../views/portfolio/Portfolio";
import Backtesting from "../views/backTesting/BackTesting";
import Accounts from "../views/accounts/Accounts";
import Navbar from "../components/navBar/Navbar";
import TopBanner from "../components/topBanner/TopBanner";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { MainContainer, Content } from "./StyledComponents";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div data-testid="app-component">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <TopBanner />
          <MainContainer>
            <Navbar />
            <Content>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/bots" element={<Bots />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/backTesting" element={<Backtesting />} />
                <Route path="/accounts" element={<Accounts />} />
              </Routes>
            </Content>
          </MainContainer>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
