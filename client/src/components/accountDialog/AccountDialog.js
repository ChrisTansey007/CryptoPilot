// client\src\components\accountDialog\AccountDialog.js

import React, { useState } from "react";
import Select from "react-select";
import ccxt from "ccxt";
import axios from "axios";
import { useForm } from "react-hook-form";
import crypto from "crypto-js";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import AccountsTable from "../accountsTable/AccountsTable";
import {
  handleRobinhoodAuthentication,
  addNewAccount,
  processExchangeNameChange,
  processSubmission,
} from "../../logic/businessLogic";

function AccountDialog({ open, onClose, onAddAccount }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [selectedExchange, setSelectedExchange] = useState(null);

  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const ccxtExchanges = [...ccxt.exchanges, "robinhood"].map((exchange) => ({
    label: exchange,
    value: exchange,
  }));

  const handleExchangeNameChange = (selectedOption) => {
    const exchangeNameValue = processExchangeNameChange(selectedOption);
    if (exchangeNameValue) {
      setValue("exchangeName", exchangeNameValue);
      setSelectedExchange(exchangeNameValue);
    }
  };

  const onSubmit = async (data) => {
    const { apiKey, secretKey, exchangeName, totp } = data;
    const response = await processSubmission(
      apiKey,
      secretKey,
      exchangeName,
      totp
    );
    setNotification({
      open: true,
      message: response.message,
      severity: response.success ? "success" : "error",
    });

    if (response.success) {
      onAddAccount(exchangeName);
      onClose();
    }
  };

  const handleCloseNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotification((prevState) => ({ ...prevState, open: false }));
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="sm"
      PaperProps={{ style: { height: "70vh", maxHeight: "70vh" } }}
    >
      <DialogTitle id="form-dialog-title">Add New Account</DialogTitle>
      <DialogContent>
        <form
          onSubmit={handleSubmit(onSubmit, (errors, e) => {
            console.log(errors, e);
          })}
        >
          <TextField
            {...register("apiKey", {
              required: `${
                selectedExchange === "robinhood" ? "Username is" : "API Key is"
              } required`,
            })}
            autoFocus
            margin="dense"
            id="api-key"
            label={selectedExchange === "robinhood" ? "Username" : "API Key"}
            type="text"
            fullWidth
            error={Boolean(errors.apiKey)}
            helperText={errors.apiKey?.message}
          />
          <TextField
            {...register("secretKey", {
              required: `${
                selectedExchange === "robinhood"
                  ? "Password is"
                  : "Secret Key is"
              } required`,
            })}
            margin="dense"
            id="secret-key"
            label={
              selectedExchange === "robinhood" ? "Password" : "Secret API Key"
            }
            type={selectedExchange === "robinhood" ? "password" : "text"}
            fullWidth
            error={Boolean(errors.secretKey)}
            helperText={errors.secretKey?.message}
          />
          <Box sx={{ my: 1 }}>
            <Select
              {...register("exchangeName", {
                required: "Exchange Name is required",
              })}
              id="exchange-name"
              options={ccxtExchanges}
              onChange={handleExchangeNameChange}
              styles={{
                control: (provided) => ({
                  ...provided,
                  minHeight: "56px",
                }),
                menu: (provided) => ({
                  ...provided,
                  maxHeight: "105px",
                }),
                option: (provided) => ({
                  ...provided,
                  minHeight: "35px",
                }),
              }}
            />
          </Box>
          {selectedExchange === "robinhood" && (
            <TextField
              {...register("totp", {
                required: "TOTP is required for Robinhood.",
              })}
              margin="dense"
              id="totp"
              label="TOTP"
              type="text"
              fullWidth
              error={Boolean(errors.totp)}
              helperText={errors.totp?.message}
            />
          )}

          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </DialogContent>

      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Dialog>
  );
}

export default AccountDialog;
