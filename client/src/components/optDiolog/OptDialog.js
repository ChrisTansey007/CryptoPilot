// client\src\components\optDiolog\OptDialog.js

import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const register = (fieldName, options) => ({});

export const handleOtpSubmit = (event) => {
  event.preventDefault();
};

const OTPDialog = ({ initialOpen = false }) => {
  const [otpRequired, setOtpRequired] = useState(initialOpen);

  return (
    <Dialog
      open={otpRequired}
      onClose={() => setOtpRequired(false)}
      aria-labelledby="otp-dialog-title"
    >
      <DialogTitle id="otp-dialog-title">Enter OTP</DialogTitle>
      <DialogContent>
        <form onSubmit={handleOtpSubmit} data-testid="otp-form">
          <TextField
            {...register("otp", { required: "OTP is required" })}
            autoFocus
            margin="dense"
            id="otp"
            label="OTP"
            type="text"
            fullWidth
          />
          <DialogActions>
            <Button onClick={() => setOtpRequired(false)} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OTPDialog;
