// client\src\components\backTestingTradeTable\BackTestTradeTable.js

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const BackTestTradeTable = ({ data }) => {
  if (!Array.isArray(data)) {
    return <div>Loading...</div>;
  }

  return (
    <TableContainer component={Paper} style={{ width: "100%" }}>
      <Table style={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell>Trade Number</TableCell>
            <TableCell align="right">Traded Date and Time</TableCell>
            <TableCell align="right">Buy Side</TableCell>
            <TableCell align="right">Sell Side</TableCell>
            <TableCell align="right">Marginal Gain</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.tradeNumber}>
              <TableCell component="th" scope="row">
                {row.tradeNumber}
              </TableCell>
              <TableCell align="right">{row.tradedDateTime}</TableCell>
              <TableCell align="right">{row.buySide}</TableCell>
              <TableCell align="right">{row.sellSide}</TableCell>
              <TableCell align="right">{row.marginalGain}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BackTestTradeTable;
