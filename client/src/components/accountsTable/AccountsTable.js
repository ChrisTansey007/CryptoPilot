import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Snackbar,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import "./AccountsTable.css";
import {
  fetchAccountsTableData,
  deleteAccountFromTable,
  handleError,
} from "../../logic/businessLogic";

const AccountsTable = ({ accountAdded }) => {
  const [accounts, setAccounts] = useState([]); // <-- useState for accounts
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const fetchAccounts = async () => {
    const { data, error } = await fetchAccountsTableData();
    if (data) setAccounts(data); // <-- Update local state instead
    if (error) handleError(error);
  };

  useEffect(() => {
    fetchAccounts(); // Initial fetch on component mount
  }, []);

  const handleDelete = async (exchangeName) => {
    const { success, error } = await deleteAccountFromTable(exchangeName);
    if (success) fetchAccounts();
    if (error) handleError(error);
  };

  const handleRefresh = async () => {
    try {
      const response = await fetch("/api/authenticate-robinhood", {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to re-authenticate");
      }
      const data = await response.json();
    } catch (error) {
      setError(error.message);
      setOpenSnackbar(true);
    }
  };

  return (
    <div>
      <TableContainer component={Paper} style={{ width: "100%" }}>
        <Table style={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell>Account ID</TableCell>
              <TableCell align="right">Balance</TableCell>
              <TableCell align="right">Last Trade Date</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(accounts) &&
              accounts.map((account) => (
                <TableRow key={account.exchangeName}>
                  <TableCell component="th" scope="row">
                    {account.exchangeName}
                  </TableCell>
                  <TableCell align="right">
                    {account.balance !== undefined
                      ? account.balance
                      : "Not Available"}
                  </TableCell>
                  <TableCell align="right">{account.lastTrade}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="secondary"
                      className="actionButton"
                      aria-label="delete"
                      onClick={() => handleDelete(account.exchangeName)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    {error === "Not logged in" && (
                      <Snackbar
                        open={openSnackbar}
                        autoHideDuration={6000}
                        onClose={() => setOpenSnackbar(false)}
                        message="Session expired. Please refresh."
                        action={
                          <IconButton
                            size="small"
                            color="inherit"
                            onClick={handleRefresh}
                          >
                            <RefreshIcon fontSize="small" />
                          </IconButton>
                        }
                      />
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={error}
      />
    </div>
  );
};

export default AccountsTable;
