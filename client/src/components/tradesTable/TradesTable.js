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
import mockTradesData from "./mockTradesTableData";

const TradesTable = () => {
  return (
    <TableContainer component={Paper} style={{ width: "100%" }}>
      <Table style={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell>Trade</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Currency Pair</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockTradesData.map((row) => (
            <TableRow key={row.trade}>
              <TableCell component="th" scope="row">
                {row.trade}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.currencyPair}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TradesTable;
