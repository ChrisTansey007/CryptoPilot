// client\src\components\registerDialog\RegisterDialog.js

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
// import { useStore } from "../../store";
import ValidatedTextField from "../validatedTextField/ValidatedTextField.js";

const RegisterDialog = ({ open, handleClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const error = useStore.error;
  // const setError = useStore.setError;
  // const register = useStore.register;

  useEffect(() => {
    if (!open) {
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError(null);
    }
  }, [open, setError]);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await register(username, email, password);
      handleClose();
    } catch (error) {
      setError("Failed to register");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Register</DialogTitle>
      <DialogContent>
        {error && <p>{error}</p>}
        <ValidatedTextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <ValidatedTextField
          label="Email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <ValidatedTextField
          label="Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <ValidatedTextField
          label="Confirm Password"
          value={confirmPassword}
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleRegister}>Register</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegisterDialog;
